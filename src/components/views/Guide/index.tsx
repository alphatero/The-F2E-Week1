import { TalkTitle } from '@/components/common';
import { useLayoutEffect, useRef } from 'react';
import { GuideCard } from './GuideCard';
import gsap from 'gsap';

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
  const titleRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        scrub: true,
        start: 'top 60%',
        end: 'top 40%',
      },
    });

    tl.from(titleEl, { opacity: 0 }).to(titleEl, { opacity: 1, yPercent: -20 });
    const ctx = gsap.context(() => {
      revealsRef?.current.forEach((el, index) => {
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

    return () => {
      ctx.revert();
    };
  }, []);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-10">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="年度最強合作，三大主題來襲" about={about} ref={titleRef} />

        <ul className="space-y-8 overflow-hidden">
          {guideList.map((item: itemType) => (
            <li className="flex flex-col items-center space-y-5" key={item.week} ref={addToRefs}>
              <GuideCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
