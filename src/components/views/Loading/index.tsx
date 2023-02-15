import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export const Loading = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          progressRef.current,
          { width: '0%' },
          { width: '100%', duration: 1, ease: 'power2.out', delay: 0.5 }
        )
        .to(loadingRef.current, { opacity: 0, duration: 1, ease: 'power2.out' })
        .to(
          containerRef.current,
          { display: 'none', opacity: 0, duration: 1, ease: 'power2.out' },
          '-=1'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed z-50 flex h-screen max-h-screen min-h-screen w-screen items-center justify-center"
      ref={containerRef}
    >
      <div className="absolute -z-10 h-full w-full bg-secondary" />

      <div className="absolute flex flex-col items-center" ref={loadingRef}>
        <img className="w-[190px]" src="/images/main/loading_2x.gif" alt="loading" />

        <div className="h-[10px] w-[250px] overflow-hidden rounded-full border border-primary lg:h-[16px] lg:w-[465px]">
          <div className="h-full bg-primary" style={{ width: '45%' }} ref={progressRef} />
        </div>
      </div>
    </div>
  );
};
