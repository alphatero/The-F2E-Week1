// import { forwardRef, PropsWithRef, Ref, useEffect } from 'react';
import { Background } from './Background';
import { UserCard, UserInfoTypes } from './UserCard';
import { useRefContext } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const userInfoList: UserInfoTypes[] = [
  {
    title: '前端工程師',
    number: 920,
  },
  {
    title: 'UI設計師',
    number: 110,
  },
  {
    title: '團體組',
    number: 41,
  },
];

export const Start = () => {
  const {
    readyRef,
    startRef,
    desktopLogoRef,
    bottomRef,
    cloudRef,
    readyTextRef,
    usersRef,
    startBgRef,
    startLogoRef,
    lightsRef,
  } = useRefContext();

  lightsRef.current = [];

  useLayoutEffect(() => {
    const startEl = startRef.current;
    const cloudEl = cloudRef.current;
    const readyTextEl = readyTextRef.current;
    const usersEl = usersRef.current;
    gsap.config({
      nullTargetWarn: false,
    });

    const ctx = gsap.context(() => {
      if (!startEl) return;
      let mm = gsap.matchMedia();
      mm.add('(min-width: 769px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: startEl,
              pin: true,
              scrub: true,
              pinSpacing: false,
              // end: () => '+=' + (startEl.offsetHeight / 2 + 300),
              // markers: true,
            },
          })
          .to(cloudEl, { scale: 0.5, duration: 3, opacity: 0 }, '-=5')
          .to(lightsRef.current[2], { opacity: 0, duration: 1 })
          .to(lightsRef.current[1], { opacity: 0, duration: 1 }, '-=1')
          .to(lightsRef.current[0], { opacity: 0, duration: 1 }, '-=1')
          .fromTo(readyTextEl, { text: 'Ready?' }, { text: '', duration: 0.1 }, '-=1')
          .fromTo(lightsRef.current[0], { opacity: 1, duration: 1 }, { opacity: 0, duration: 1 })
          .fromTo(lightsRef.current[1], { opacity: 1, duration: 1 }, { opacity: 0, duration: 1 })
          .to(lightsRef.current[2], { opacity: 1, duration: 1 })
          .fromTo(readyTextEl, { text: '' }, { text: 'Go!!', duration: 0.1 }, '<')
          .to(usersEl, { opacity: 0, duration: 1 })
          .to(readyRef.current, { opacity: 0, duration: 1 }, '-=1')
          .to(startBgRef.current, { opacity: 0, duration: 1 })
          .to(startLogoRef.current, { opacity: 0, duration: 1 }, '-=1')
          .to(desktopLogoRef.current, { opacity: 1, duration: 1 }, '-=1')
          .to(bottomRef.current, { scale: 0.5, duration: 1 }, '-=1');
      });
    });
    return () => ctx.revert();
  });

  const addToRefs = (el: HTMLImageElement) => {
    if (el && !lightsRef.current.includes(el)) {
      lightsRef.current.push(el);
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center pt-8 lg:h-full lg:pt-0"
      ref={startRef}
      id="start"
    >
      <Background ref={cloudRef} />
      <div className="relative flex h-full w-full flex-col items-center">
        <img
          src="/images/main/start.png"
          className="absolute hidden w-full max-w-[1430px] lg:block lg:h-full"
          alt="start_bg"
          ref={startBgRef}
        />
        <div className="z-10 flex">
          <div className="flex w-full items-center justify-center">
            <img src="/images/logo/logo.png" className="w-[253px] lg:hidden" alt="logo" />
          </div>
        </div>

        <div
          className="z-10 flex w-full flex-col items-center justify-center space-y-5 py-5"
          ref={startLogoRef}
        >
          <img src="/images/logo/logo_text.png" className="hidden w-[680px] lg:block" alt="logo" />
          <div className="rounded-full bg-highlight py-1 px-4">
            <p className="text-xl text-white">互動式網頁設計</p>
          </div>
        </div>
        <ul
          className="flex h-full w-full flex-col space-y-4 lg:max-w-[940px] lg:flex-row lg:space-y-0"
          ref={usersRef}
        >
          {userInfoList.map((user) => (
            <UserCard key={`user_card_${user.title}`} title={user.title} number={user.number} />
          ))}
        </ul>
        <button
          className="absolute bottom-1/3 right-0 flex w-[120px] -translate-y-4 flex-col lg:bottom-1/2 lg:w-[275px] lg:translate-y-16"
          ref={readyRef}
        >
          <div
            className="-translate-x-2 self-center font-bold text-highlight lg:text-[32px]"
            ref={readyTextRef}
          >
            {/* READY? */}
          </div>
          <div className="flex">
            <div className="flex space-x-1 p-3 lg:translate-x-6 lg:translate-y-5 lg:space-x-4">
              {[3, 2, 1].map((number) => (
                <img
                  className="w-6 lg:w-12"
                  key={`start_image_${number}`}
                  src={`/images/main/ready_${number}.png`}
                  alt={`ready_${number}`}
                  ref={addToRefs}
                />
              ))}
            </div>
            <img className="absolute" src="/images/main/ready_frame.png" alt="ready-frame" />
          </div>
        </button>
      </div>
    </div>
  );
};
