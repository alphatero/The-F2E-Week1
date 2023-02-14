import { TalkTitle } from '@/components/common';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const awardList = [
  {
    id: 1,
    title: '初選佳作 共六十位 數位獎狀',
  },
  {
    id: 2,
    title: '個人企業獎 共六位 NTD 3,000 /位',
  },
  {
    id: 3,
    title: '團體企業獎 共三組 NTD 10,000 /組',
  },
  {
    id: 4,
    title: '以上皆提供完賽數位獎狀',
  },
];

export function Rule() {
  const titleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rulesRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
          .to(imgRef.current, { rotation: 360 / 2, duration: 1, ease: 'none' })
          .fromTo(
            cardRef.current,
            { opacity: 0, xPercent: -10 },
            { opacity: 1, xPercent: 0, duration: 1 }
          )
          .fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1')
          .to(cardRef.current, { opacity: 0, xPercent: 10, duration: 1, delay: 1 })
          .to(titleRef.current, { opacity: 0, duration: 1 }, '-=1');
      });

      mm.add('(max-width: 768px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: titleRef.current,
              scrub: true,
              start: 'top center',
              end: 'top 40%',
            },
          })
          .from(titleRef.current, { opacity: 0 })
          .to(titleRef.current, { opacity: 1, yPercent: -20 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: titleRef.current,
              scrub: true,
            },
          })
          .to(imgRef.current, { rotation: 360 * 2, duration: 1, ease: 'none' });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: rulesRef.current,
              scrub: true,
            },
          })
          .fromTo(rulesRef.current, { opacity: 0 }, { opacity: 1 });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={clsx(
        'flex min-h-screen w-full flex-col items-center justify-center',
        'lg:h-screen lg:items-start lg:justify-start lg:overflow-x-hidden lg:py-0'
      )}
      ref={containerRef}
    >
      <div className="relative flex w-full flex-col items-center space-y-6">
        <div className="flex w-full flex-col items-center">
          <TalkTitle title="還有比賽等著你！" ref={titleRef} />
          <div className="w-full max-w-7xl p-5 lg:flex lg:justify-between" ref={cardRef}>
            <div
              className={clsx(
                'relative flex items-center justify-center overflow-hidden',
                'max-w-[375px]'
              )}
            >
              <img src="/images/main/award_light.png" alt="award_light" ref={imgRef} />
              <img className="absolute" src="/images/main/award_trophy.png" alt="award_trophy" />
            </div>
            <ul ref={rulesRef} className="lg:flex-col">
              <li className="flex flex-col space-y-4 py-10 lg:py-4">
                <h4 className="text-[32px] font-bold text-highlight">評審機制</h4>
                <p className="flex flex-col text-lg text-primary">
                  <span>初選： 將由六角學院前端、UI 評審進行第一波篩選。</span>
                  <span>
                    決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                    由評審進行直播公布名單！
                  </span>
                </p>
              </li>
              <li className="flex flex-col space-y-4 py-10 lg:py-4">
                <h4 className="text-[32px] font-bold text-highlight">獎項</h4>
                <ul className="w-full text-lg text-primary">
                  {awardList.map((award) => (
                    <li key={`award_${award.id}`}>
                      {award.id}. {award.title}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
