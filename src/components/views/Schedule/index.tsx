import { Icons, TalkTitle } from '@/components/common';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useRefContext } from '@/components/contexts';

const scheduleList = [
  {
    id: 1,
    title: 'SIGN UP',
    date: '10/13 - 11/6',
    image: <Icons.JoinBtn join={true} />,
    weekLineBuffer: 'translate-y-[68px]',
    contents: [
      {
        id: 1,
        content: '截止前可修改報名組別',
      },
    ],
  },
  {
    id: 2,
    title: 'START',
    date: '10/31 - 11/28',
    image: <img className="w-[140px]" src="/images/main/date_start.png" alt="date_start" />,
    weekLineBuffer: 'translate-y-[46px]',
    contents: [
      {
        id: 1,
        content: '10/31(一) UI、團體組開賽',
      },
      {
        id: 2,
        content: '11/7(一) 前端組開賽',
      },
    ],
  },
  {
    id: 3,
    title: 'UPLOAD',
    date: '10/31 - 11/28',
    image: <img className="w-[140px]" src="/images/main/date_upload.png" alt="date_upload" />,
    weekLineBuffer: 'translate-y-[72px]',
    contents: [
      {
        id: 1,
        content: '依賽程登錄作品',
      },
      {
        id: 2,
        content: '額外競賽： 主題豐厚獎金等著你',
        notice: true,
      },
    ],
  },
];

export function Schedule() {
  const { scheduleTitleRef } = useRefContext();
  const titleRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const sloganParentRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const sloganParentEl = sloganParentRef.current;
    const sloganEl = sloganRef.current;

    let mm = gsap.matchMedia();

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

      const tlTwo = gsap.timeline({
        scrollTrigger: {
          trigger: sloganParentEl,
          scrub: true,
          start: 'top center',
          end: 'center center',
        },
      });

      tlTwo.from(sloganEl, { opacity: 0, scale: 3 }).to(sloganEl, { opacity: 1, scale: 1 });

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
    });
  }, []);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div
      className={clsx(
        'relative flex h-full min-h-screen w-full flex-col items-center justify-center py-10',
        'lg:absolute lg:justify-center lg:pt-4 lg:pb-0'
      )}
    >
      <div className="relative flex h-full w-full flex-col items-center space-y-6 lg:px-20  lg:pt-4">
        {/* <div className="flex w-full flex-col items-center lg:justify-center"> */}
        <TalkTitle className="lg:hidden" title="重要時程" ref={scheduleTitleRef} />

        <ul className="lg:flex">
          {scheduleList.map((schedule) => (
            <li
              key={`schedule_${schedule.id}`}
              ref={addToRefs}
              className="relative z-10 flex justify-center py-10 lg:space-x-10"
            >
              <div className={clsx('absolute bottom-0 -z-20', schedule.weekLineBuffer)}>
                <img className="w-8" src="/images/main/date_weekLine.png" alt="weekLine" />
              </div>
              <div className="flex flex-col items-center space-y-4 bg-secondary">
                {schedule.image}
                <h2 className="text-highlight">{schedule.title}</h2>
                <div className="rounded-full bg-primary py-2 px-7 text-white">
                  <h4>{schedule.date}</h4>
                </div>
                <h4 className="flex flex-col text-center text-secondary-dark">
                  {schedule.contents.map((item) => (
                    <span
                      key={`content_item_${item.id}`}
                      className={clsx(item.notice && 'text-base font-normal text-highlight')}
                    >
                      {item.content}
                    </span>
                  ))}
                </h4>
              </div>
            </li>
          ))}
        </ul>
        <div className="relative">
          <img src="/images/main/date_line.png" alt="line" />
        </div>
        {/* </div> */}
        {/* <div
          className="flex min-h-screen items-center justify-center overflow-hidden"
          ref={sloganParentRef}
        >
          <h2 className="flex flex-col justify-center text-center text-highlight" ref={sloganRef}>
            <span>區區修煉</span>
            <span>已經無法滿足了嗎？</span>
          </h2>
        </div> */}
      </div>
    </div>
  );
}
