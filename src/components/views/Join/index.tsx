import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export function Join() {
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
              pinSpacing: true,
            },
          })
          .fromTo(
            containerRef.current,
            { opacity: 0, yPercent: 20 },
            { opacity: 1, yPercent: 0, duration: 1 }
          );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center"
      ref={containerRef}
    >
      <div className="relative flex w-full flex-col items-center space-y-10">
        <div className="flex w-full items-center justify-center">
          <img src="/images/logo/logo.png" className="w-[253px]" alt="logo" />
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[57px] animate-bounce"
            src="/images/btn/btn_joinHand.png"
            alt="join_hand"
          />
          <img className="h-[60px]" src="/images/btn/btn_join.png" alt="join_button" />
          <p className="py-4 text-3xl font-bold text-highlight">立即報名</p>
        </div>
      </div>
    </div>
  );
}
