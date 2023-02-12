import { useRefContext } from '@/components/contexts';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { Background } from '../Start/Background';

export function Finish() {
  const { bottomRef, lineRef } = useRefContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  // const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      if (!lineRef.current) return;

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
          .fromTo(
            cloudsRef.current,
            { opacity: 0, scale: 4 },
            { opacity: 1, scale: 1, duration: 2 }
          )
          .fromTo(containerRef.current!.children[1], { opacity: 0 }, { opacity: 1, duration: 2 })
          .fromTo(lineRef.current, { opacity: 0 }, { opacity: 1, duration: 2 }, '-=1')
          .to(bottomRef.current, { scale: 1, duration: 1, delay: 1 })
          .to(cloudsRef.current, { scale: 0.6, duration: 1, opacity: 0 }, '-=1')
          .to(lineRef.current!.children[0], { rotate: -5, xPercent: -5, duration: 1 }, '-=1')
          .to(lineRef.current!.children[1], { rotate: 5, xPercent: 5, duration: 1 }, '-=1')
          .to(bottomRef.current, { scale: 1.4, duration: 1 })
          .to(lineRef.current, { opacity: 0, duration: 1 }, '-=1')
          .to(bottomRef.current, { opacity: 0, duration: 1 })
          .to(containerRef.current, { opacity: 0, duration: 1 });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className={clsx(
        'relative flex min-h-screen flex-col items-center justify-center pt-8',
        'lg:h-full lg:max-h-screen lg:overflow-hidden lg:pt-0'
      )}
      ref={containerRef}
    >
      <Background ref={cloudsRef} />
      <div className="relative flex h-full w-full flex-col items-center">
        <img
          src="/images/main/finish.png"
          className="absolute hidden w-full max-w-[1430px] lg:block lg:h-full"
          alt="finish_bg"
        />
        {/* <div className="z-10 flex items-center"> */}

        {/* </div> */}
        {/* 
        <div
          className="z-10 flex w-full flex-col items-center justify-center space-y-5 py-5"
          ref={startLogoRef}
        >
          <img src="/images/logo/logo_text.png" className="hidden w-[680px] lg:block" alt="logo" />
          <div className="rounded-full bg-highlight py-1 px-4">
            <p className="text-xl text-white">互動式網頁設計</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}