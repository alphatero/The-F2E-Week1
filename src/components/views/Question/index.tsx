import { TalkTitle, useRefContext } from '@/components';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const questionList = [
  {
    id: 1,
    title: '羨慕別人的酷酷網頁動畫？',
    image: '/images/main/question_1_m.png',
    position: '-translate-x-full',
  },
  {
    id: 2,
    title: '滿足不了同事的許願？',
    image: '/images/main/question_2.png',
    position: 'translate-y-10',
  },
  {
    id: 3,
    title: '動畫技能樹太雜無從下手？',
    image: '/images/main/question_3_m.png',
    position: 'translate-x-full',
  },
];

export const Question = () => {
  const { questionRef } = useRefContext();

  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  useLayoutEffect(() => {
    const questionEl = questionRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: questionEl,
        scrub: true,
        start: 'top center',
        end: 'top 40%',
      },
    });

    tl.from(questionEl, { opacity: 0 }).to(questionEl, { opacity: 1, yPercent: -20 });
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

  const addToRefs = (el: any) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="你是否也有以下困擾？" ref={questionRef} />
        <ul className="overflow-hidden">
          {questionList.map((question) => (
            <li
              key={`question_${question.id}`}
              className={clsx('flex flex-col items-center space-y-2 px-5', question.position)}
              ref={addToRefs}
            >
              <p className="text-xl text-highlight">{question.title}</p>
              <img src={question.image} alt={`question_${question.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
