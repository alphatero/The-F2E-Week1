import { Icons, TalkTitle } from '@/components/common';
import { useRefContext } from '@/components/contexts';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

interface roleTypes {
  id: number;
  title: string;
  image: string;
  join?: boolean;
  position: string;
}

const roleList: roleTypes[] = [
  {
    id: 1,
    title: '前端工程師',
    image: '/images/character/character_f2e.png',
    join: true,
    position: 'translate-x-full',
  },
  {
    id: 2,
    title: 'UI設計師',
    image: '/images/character/character_ui.png',
    position: '-translate-x-full',
  },
  {
    id: 3,
    title: '團體組(UI+前端)',
    image: '/images/character/character_team.png',
    position: 'translate-x-full',
  },
];

const about = [
  {
    id: 1,
    content: '以下兩個角色進行攜手合作',
  },
];

export function Roles() {
  const { roleTitleRef, rolesRef } = useRefContext();
  // const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLUListElement>(null);
  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    // const titleEl = titleRef.current;
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
              markers: true,
            },
          })
          .fromTo(roleTitleRef.current, { opacity: 0 }, { opacity: 1 })
          .fromTo(roleRef.current, { opacity: 0, yPercent: 50 }, { opacity: 1, yPercent: 0 })
          .to(roleTitleRef.current, { opacity: 0 })
          .to(roleRef.current, { opacity: 0, yPercent: 50 }, '<+=100%');
      });

      mm.add('(max-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: roleTitleRef.current,
            scrub: true,
            start: 'top center',
            end: 'top 40%',
          },
        });

        tl.from(roleTitleRef.current, { opacity: 0 }).to(roleTitleRef.current, {
          opacity: 1,
          yPercent: -20,
        });
        gsap.context(() => {
          rolesRef?.current.forEach((el, index) => {
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
  });

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !rolesRef.current.includes(el)) {
      rolesRef.current.push(el);
    }
  };

  return (
    <div
      className={clsx(
        'relative flex h-full min-h-screen w-full flex-col items-center justify-center pb-28',
        'lg:h-screen lg:justify-start lg:pt-4 lg:pb-0'
      )}
      ref={containerRef}
    >
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="本屆主題：互動式網頁設計？" about={about} ref={roleTitleRef} />
        <ul className="overflow-hidden lg:flex lg:space-x-24" ref={roleRef}>
          {roleList.map((role) => (
            <li
              key={`role_${role.id}`}
              className={clsx(
                'flex items-center space-x-4 px-5 lg:space-x-0',
                role.position,
                'lg:translate-x-0'
              )}
              ref={addToRefs}
            >
              <img
                src={role.image}
                className={clsx('w-[158px] lg:hidden', role.id === 2 && 'order-2')}
                alt={role.title}
              />
              <div className="flex flex-col items-center px-4">
                <div className="lg:hidden">
                  <Icons.JoinBtn join={role.join} />
                </div>
                <div className="hidden lg:block">
                  <Icons.JoinBtn />
                </div>

                <p className="pt-4 text-xl text-primary">{role.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
