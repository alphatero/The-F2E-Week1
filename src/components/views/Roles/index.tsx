import { Icons, TalkTitle } from '@/components/common';
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
        <TalkTitle title="本屆主題：互動式網頁設計？" about={about} ref={titleRef} />
        <ul className="overflow-hidden">
          {roleList.map((role) => (
            <li
              key={`role_${role.id}`}
              className={clsx('flex items-center space-x-4 px-5', role.position)}
              ref={addToRefs}
            >
              <img
                src={role.image}
                className={clsx('w-[158px]', role.id === 2 && 'order-2')}
                alt={role.title}
              />
              <div className="flex flex-col items-center px-4">
                <Icons.JoinBtn join={role.join} />
                <p className="pt-4 text-xl text-primary">{role.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
