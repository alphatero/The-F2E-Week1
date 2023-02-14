import { TalkTitle } from '@/components/common';
import { useLayoutEffect, useRef } from 'react';
import { GuideCard } from './GuideCard';
import gsap from 'gsap';
import { useRefContext } from '@/components';
import clsx from 'clsx';

const guideList = [
  {
    week: 1,
    title: 'The F2E 活動網站設計',
    info: ['Parallax Scrolling', '#版塊設計'],
  },
  {
    week: 2,
    title: '今晚，我想來點點簽',
    info: ['Canvas', '#凱鈿行動科技'],
  },
  {
    week: 3,
    title: 'Scrum 新手村',
    info: ['JS draggable', '#鈦坦科技'],
  },
];

interface itemType {
  week: number;
  title: string;
  info: string[];
}

const about = [
  {
    id: 1,
    content: '各路廠商強強聯手',
  },
  {
    id: 2,
    content: '共同設計出接地氣的網頁互動挑戰關卡',
  },
];

export function Guide() {
  const { deskBottomRef } = useRefContext();
  const guideTitleRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLLIElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              scrub: true,
            },
          })
          .fromTo(guideTitleRef.current, { opacity: 0 }, { opacity: 1 })
          .to(deskBottomRef.current, { scale: 0.5 }, '-=1')
          .fromTo(
            guidesRef.current[0],
            { opacity: 0, xPercent: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1 }
          )
          .to(guidesRef.current[0], { opacity: 0, duration: 1, yPercent: -100, delay: 1 })
          .fromTo(
            guidesRef.current[1],
            { opacity: 0, xPercent: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1 },
            '-=1'
          )
          .to(guidesRef.current[1], { opacity: 0, duration: 1, yPercent: -100, delay: 1 })
          .fromTo(
            guidesRef.current[2],
            { opacity: 0, xPercent: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1 },
            '-=1'
          )
          .to(guidesRef.current[2], { opacity: 0, duration: 1, yPercent: -100, delay: 1 })
          .to(guideTitleRef.current, { opacity: 0, duration: 1 })
          .to(deskBottomRef.current, { scale: 0.7 });
      });

      mm.add('(max-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: guideTitleRef.current,
            scrub: true,
            start: 'top 60%',
            end: 'top 40%',
          },
        });

        tl.from(guideTitleRef.current, { opacity: 0 }).to(guideTitleRef.current, {
          opacity: 1,
          yPercent: -20,
        });
        gsap.context(() => {
          guidesRef?.current.forEach((el, index) => {
            const tl = gsap.timeline({
              scrollTrigger: {
                id: `section-${index}`,
                trigger: el,
                end: 'bottom 40%',
                scrub: true,
                start: 'top center',
              },
            });
            tl.fromTo(
              el,
              {
                opacity: 0,
              },
              { opacity: 1, x: 0, y: 0 }
            );
            // }
          });
        });
      });
    });
    return () => {
      ctx.revert();
    };
  });

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !guidesRef.current.includes(el)) {
      guidesRef.current.push(el);
    }
  };
  return (
    <div
      className={clsx(
        'relative flex h-full w-full flex-col items-center justify-center py-28 lg:min-h-screen',
        'lg:h-screen lg:items-start lg:justify-start lg:py-0'
      )}
      ref={containerRef}
    >
      <div className="relative flex w-full flex-col items-center space-y-6 lg:pt-4">
        <TalkTitle title="年度最強合作，三大主題來襲" about={about} ref={guideTitleRef} />

        <ul className="relative h-full w-full max-w-5xl space-y-8 lg:flex lg:justify-center">
          {guideList.map((item: itemType) => (
            <li
              className={clsx(
                'flex flex-col items-center space-y-5 lg:absolute lg:w-full lg:px-4',
                item.week === 2 ? 'lg:items-end' : 'lg:items-start'
              )}
              key={item.week}
              ref={addToRefs}
            >
              <GuideCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
