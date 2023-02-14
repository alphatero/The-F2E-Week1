import { TalkTitle, useRefContext } from '@/components';
import clsx from 'clsx';
import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';

const questionList = [
  {
    id: 1,
    title: '羨慕別人的酷酷網頁動畫？',
    image: '/images/main/question_1',
    position: '-translate-x-full',
  },
  {
    id: 2,
    title: '滿足不了同事的許願？',
    image: '/images/main/question_2',
    position: 'translate-y-10',
  },
  {
    id: 3,
    title: '動畫技能樹太雜無從下手？',
    image: '/images/main/question_3',
    position: 'translate-x-full',
  },
];

export const Question = () => {
  const { bottomRef } = useRefContext();

  const questionRef = useRef<HTMLDivElement>(null);
  const questionRefs = useRef<HTMLDivElement>(null);
  const questionCardsRef = useRef<HTMLLIElement[]>([]);
  const questionDecorationsRef = useRef<HTMLDivElement>(null);

  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];
  questionCardsRef.current = [];

  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    const questionEl = questionRef.current;
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      //desktop
      mm.add('(min-width: 769px)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: questionRefs.current,
              pin: true,
              scrub: true,
            },
          })
          .fromTo(questionRef.current, { opacity: 0 }, { opacity: 1 })
          .fromTo(
            questionCardsRef.current[0],
            { opacity: 0, xPercent: -100 },
            { opacity: 1, xPercent: 0 }
          )
          .fromTo(questionCardsRef.current[1], { opacity: 0 }, { opacity: 1 })
          .fromTo(
            questionCardsRef.current[2],
            { opacity: 0, xPercent: 100 },
            { opacity: 1, xPercent: 0 }
          )
          .fromTo(questionDecorationsRef.current, { opacity: 1 }, { opacity: 0, scale: 0 })
          .to(questionRefs.current, { opacity: 0 })
          .to(bottomRef.current, { scale: 1 });
      });

      //mobile
      mm.add('(max-width: 768px)', () => {
        setIsMobile(true);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: questionEl,
            scrub: true,
            start: 'top center',
            end: 'top 40%',
          },
        });

        tl.from(questionEl, { opacity: 0 }).to(questionEl, { opacity: 1, yPercent: -20 });
        gsap.context(() => {
          questionCardsRef?.current.forEach((el, index) => {
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
          });
        });
      });
    });

    return () => ctx.revert();
  });

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !questionCardsRef.current.includes(el)) {
      questionCardsRef.current.push(el);
    }
  };

  return (
    <div
      className={clsx(
        'relative top-0 flex pb-28',
        'h-full min-h-screen w-full flex-col items-center justify-center',
        'lg:h-screen lg:justify-start lg:pt-4'
      )}
      ref={questionRefs}
      id="question"
    >
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="你是否也有以下困擾？" ref={questionRef} />
        <ul className="overflow-x-hidden lg:flex lg:overflow-x-clip ">
          {questionList.map((question) => (
            <li
              key={`question_${question.id}`}
              className={clsx(
                'flex flex-col items-center space-y-2 px-5',
                isMobile && question.position
              )}
              ref={addToRefs}
            >
              <p className="text-xl text-highlight lg:text-[32px]">{question.title}</p>
              <img
                src={question.image + (isMobile && question.id !== 2 ? '_m.png' : '.png')}
                alt={`question_${question.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        className="fixed bottom-0 hidden w-full max-w-[1430px] justify-between px-32 lg:flex"
        ref={questionDecorationsRef}
      >
        <div className="relative">
          <img
            className="w-[150px] -scale-x-100"
            src="/images/bg/bg_decorate_09.png"
            alt="decorate"
          />
        </div>
        <div className="relative">
          <img className="w-[150px]" src="/images/bg/bg_decorate_09.png" alt="decorate" />
        </div>
      </div>
    </div>
  );
};
