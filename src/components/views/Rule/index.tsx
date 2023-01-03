import { TalkTitle } from '@/components/common';
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

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const imgEl = imgRef.current;
    const rulesEl = rulesRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        scrub: true,
        start: 'top center',
        end: 'top 40%',
      },
    });

    const imgtl = gsap.timeline({
      scrollTrigger: {
        trigger: titleEl,
        scrub: true,
      },
    });

    const rulestl = gsap.timeline({
      scrollTrigger: {
        trigger: rulesEl,
        scrub: true,
      },
    });

    tl.from(titleEl, { opacity: 0 }).to(titleEl, { opacity: 1, yPercent: -20 });
    imgtl.to(imgEl, { rotation: 360 * 2, duration: 1, ease: 'none' });
    rulestl.fromTo(rulesEl, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <div className="flex w-full flex-col items-center">
          <TalkTitle title="還有比賽等著你！" ref={titleRef} />
          <div className="p-5">
            <div className="relative flex items-center justify-center overflow-hidden">
              <img src="/images/main/award_light.png" alt="award_light" ref={imgRef} />
              <img className="absolute" src="/images/main/award_trophy.png" alt="award_trophy" />
            </div>
            <ul ref={rulesRef}>
              <li className="flex flex-col space-y-4 py-10">
                <h4 className="text-[32px] font-bold text-highlight">評審機制</h4>
                <p className="flex flex-col text-lg text-primary">
                  <span>初選： 將由六角學院前端、UI 評審進行第一波篩選。</span>
                  <span>
                    決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                    由評審進行直播公布名單！
                  </span>
                </p>
              </li>
              <li className="flex flex-col space-y-4 py-10">
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
