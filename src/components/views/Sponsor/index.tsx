import { TalkTitle } from '@/components/common';
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
  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        scrub: true,
        start: 'top center',
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
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <div className="flex w-full flex-col items-center">
          <TalkTitle title="贊助單位" ref={titleRef} />
          <div className="px-5">
            <ul>
              {sponsorList.map((sponsor) => (
                <li
                  key={`sponsor_${sponsor.id}`}
                  className="flex flex-col items-center space-y-4 py-10"
                  ref={addToRefs}
                >
                  <div className="relative w-[252px] bg-btn-sponsor bg-contain bg-no-repeat p-5">
                    <img src={sponsor.image} alt={sponsor.title} />
                  </div>
                  <div className="rounded-full border-2 border-secondary-dark text-center text-secondary-dark">
                    <p className="py-1 px-6 text-lg font-bold">#{sponsor.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
