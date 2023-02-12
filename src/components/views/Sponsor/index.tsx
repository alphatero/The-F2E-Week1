import { TalkTitle } from '@/components/common';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const sponsorList = [
  {
    id: 1,
    title: '版塊設計',
    image: '/images/main/logo_blockstudio.png',
  },
  {
    id: 2,
    title: '鈦坦科技',
    image: '/images/main/logo_titansoft.png',
  },
  {
    id: 3,
    title: '凱鈿科技',
    image: '/images/main/logo_kdanmobile.png',
  },
];

export function Sponsor() {
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const decorateRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const titleEl = titleRef.current;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              scrub: true,
              // pinSpacing: true,
            },
          })
          .fromTo(titleEl, { opacity: 0, yPercent: 20 }, { opacity: 1, yPercent: 0, duration: 1 })
          .fromTo(
            decorateRef.current,
            { opacity: 0, scale: 6 },
            { opacity: 2, scale: 1, duration: 1 },
            '-=1'
          )
          .to(decorateRef.current, { scale: 0.8, duration: 3 }, '-=1')
          .fromTo(
            revealsRef.current[0],
            { opacity: 0, yPercent: 20 },
            { opacity: 1, yPercent: 0, duration: 1 },
            '-=1'
          )
          .fromTo(
            revealsRef.current[1],
            { opacity: 0, yPercent: 20 },
            { opacity: 1, yPercent: 0, duration: 2 },
            '-=1'
          )
          .fromTo(
            revealsRef.current[2],
            { opacity: 0, yPercent: 20 },
            { opacity: 1, yPercent: 0, duration: 3 },
            '-=1'
          )
          .to(titleRef.current, { opacity: 0, duration: 1, delay: 2 })
          .to(decorateRef.current, { opacity: 0, scale: 0.5, duration: 1 }, '-=1')
          .to(revealsRef.current, { opacity: 0, yPercent: 20, duration: 1 }, '-=1');
      });

      mm.add('(max-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleEl,
            scrub: true,
            start: 'top center',
            end: 'top 40%',
          },
        });

        tl.from(titleEl, { opacity: 0 }).to(titleEl, { opacity: 1, yPercent: -20 });
        gsap.context(() => {
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
      });
    });

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div
      className={clsx(
        'flex h-full min-h-screen w-full flex-col items-center justify-center pt-10',
        'lg:h-screen lg:items-start lg:justify-start lg:overflow-hidden lg:py-0'
      )}
      ref={containerRef}
    >
      <div className="relative flex h-full w-full flex-col items-center space-y-6">
        <div className="flex w-full flex-col items-center">
          <TalkTitle title="贊助單位" ref={titleRef} />
          <div className="w-full max-w-7xl px-5">
            <ul className="w-full lg:mx-0.5 lg:flex lg:justify-between">
              {sponsorList.map((sponsor) => (
                <li
                  key={`sponsor_${sponsor.id}`}
                  className="flex flex-col items-center space-y-4 py-10"
                  ref={addToRefs}
                >
                  <div
                    className={clsx(
                      'relative w-[252px] bg-btn-sponsor bg-contain bg-no-repeat p-6',
                      'lg:hover:bg-btn-sponsor-active'
                    )}
                  >
                    <img className="-translate-x-1" src={sponsor.image} alt={sponsor.title} />
                  </div>
                  <div className="rounded-full border-2 border-secondary-dark text-center text-secondary-dark">
                    <p className="py-1 px-6 text-lg font-bold">#{sponsor.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="absolute bottom-0 -z-10 hidden w-full max-w-7xl justify-between lg:flex"
            ref={decorateRef}
          >
            <img className="w-[331px]" src="/images/bg/bg_decorate_04.png" alt="bg_decorate_04" />
            <img className="w-[342px]" src="/images/bg/bg_decorate_08.png" alt="bg_decorate_08" />
          </div>
        </div>
      </div>
    </div>
  );
}
