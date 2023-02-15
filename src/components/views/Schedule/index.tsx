import { Icons, TalkTitle } from '@/components/common';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

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
  const titleRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const sloganParentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const decorateRef = useRef<HTMLDivElement>(null);
  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const sloganParentEl = sloganParentRef.current;
    const sloganEl = sloganRef.current;

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
          .fromTo(lineRef.current!.children[0], { scaleX: 1 }, { scaleX: 0, duration: 1 })
          .fromTo(revealsRef.current[0], { opacity: 0 }, { opacity: 1, duration: 1 })
          .fromTo(
            revealsRef.current[0].children[1],
            { yPercent: 10 },
            { yPercent: 0, duration: 1 },
            '-=1'
          )
          .fromTo(revealsRef.current[1], { opacity: 0 }, { opacity: 1, duration: 1 })
          .fromTo(
            revealsRef.current[1].children[1],
            { yPercent: 10 },
            { yPercent: 0, duration: 1 },
            '-=1'
          )
          .fromTo(revealsRef.current[2], { opacity: 0 }, { opacity: 1, duration: 1 })
          .fromTo(
            revealsRef.current[2].children[1],
            { yPercent: 10 },
            { yPercent: 0, duration: 1 },
            '-=1'
          )
          .to(revealsRef.current, { opacity: 0, yPercent: -50, duration: 1 })
          .to(lineRef.current, { opacity: 0, duration: 1 }, '-=1')
          .fromTo(
            decorateRef.current,
            { scale: 2, opacity: 0 },
            { opacity: 1, scale: 0.9, duration: 1 }
          )
          .to(decorateRef.current, { scale: 0.7, duration: 1 })
          .fromTo(
            sloganParentRef.current,
            { opacity: 0, scale: 5 },
            { opacity: 1, scale: 0.7, duration: 1 },
            '-=1'
          )
          .to(decorateRef.current, { opacity: 0, delay: 3 })
          .fromTo(sloganParentRef.current, { opacity: 1 }, { opacity: 0, duration: 1 }, '-=1');
      });

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
            pin: true,
            pinSpacing: true,
          },
        });

        tlTwo
          .from(sloganEl, { opacity: 0, scale: 5 })
          .to(sloganEl, { opacity: 1, scale: 1 })
          .to(sloganEl, { opacity: 0, duration: 1 });

        gsap.context(() => {
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
    <div
      className={clsx(
        'relative flex h-full min-h-screen w-full flex-col items-center justify-center py-10',
        'lg:h-screen lg:justify-center lg:overflow-hidden lg:pt-4 lg:pb-0'
      )}
      ref={containerRef}
    >
      <div className="relative flex h-full w-full flex-col items-center space-y-6 lg:px-20  lg:pt-4">
        <TalkTitle className="lg:hidden" title="重要時程" ref={titleRef} />

        <ul className="lg:flex">
          {scheduleList.map((schedule) => (
            <li
              key={`schedule_${schedule.id}`}
              ref={addToRefs}
              className="relative z-10 flex justify-center py-10 lg:space-x-10"
            >
              <div
                className={clsx('absolute bottom-0 -z-20 hidden lg:block', schedule.weekLineBuffer)}
              >
                <img className="w-8" src="/images/main/date_weekLine.png" alt="weekLine" />
              </div>
              <div className="flex flex-col items-center space-y-4 bg-secondary">
                {schedule.image}
                <h2 className="text-highlight">{schedule.title}</h2>
                <div className="whitespace-nowrap rounded-full bg-primary py-2 px-7 text-white">
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
        <div className="relative" ref={lineRef}>
          <div className="absolute h-full w-full origin-right bg-secondary" />
          <img src="/images/main/date_line.png" alt="line" />
        </div>
        <div
          className="absolute top-1/3 hidden w-full justify-between self-center lg:flex"
          ref={decorateRef}
        >
          <img
            className="h-full w-[368px]"
            src="/images/bg/bg_decorate_03.png"
            alt="bg_decorate_03"
          />
          <img
            className="h-full w-[450px]"
            src="/images/bg/bg_decorate_07.png"
            alt="bg_decorate_07"
          />
        </div>
        <div
          className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-secondary lg:absolute  lg:top-1/3 lg:min-h-0 lg:bg-opacity-0"
          ref={sloganParentRef}
        >
          <h2
            className="flex flex-col justify-center text-center text-highlight lg:flex-row"
            ref={sloganRef}
          >
            <span>區區修煉</span>
            <span>已經無法滿足了嗎？</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
