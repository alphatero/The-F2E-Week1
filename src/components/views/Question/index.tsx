import { TalkTitle, useRefContext } from '@/components';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);

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
  const { questionRef } = useRefContext();

  const containRef = useRef<HTMLDivElement>(null);

  const revealsRef = useRef<HTMLElement[]>([]);
  revealsRef.current = [];

  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    const questionEl = questionRef.current;
    const containEl = containRef.current;

    const ctx = gsap.context(() => {
      // let mm = gsap.matchMedia();

      // mm.add('(min-width: 769px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containEl,
            scrub: true,
            // pin: true,
            markers: true,
            // start: 'top bottom',
            // end: 'bottom top',
            // pinSpacing: false,
            // toggleActions: 'play none none reverse',
            end: () => `+=400`,
          },
        })
        .to(containEl, { opacity: 0, duration: 1 });
      // tls
      //   .fromTo(revealsRef.current[0], { opacity: 0 }, { opacity: 1, duration: 1 })
      //   .fromTo(questionEl, { opacity: 0 }, { opacity: 1, duration: 1 });
      // });
      return () => ctx.revert();
    });

    // mm.add('(max-width: 768px)', () => {
    //   setIsMobile(true);
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: questionEl,
    //       scrub: true,
    //       start: 'top center',
    //       end: 'top 40%',
    //     },
    //   });

    //   tl.from(questionEl, { opacity: 0 }).to(questionEl, { opacity: 1, yPercent: -20 });
    //   const ctx = gsap.context(() => {
    //     revealsRef?.current.forEach((el, index) => {
    //       const tl = gsap.timeline({
    //         scrollTrigger: {
    //           id: `section-${index}`,
    //           trigger: el,
    //           end: 'bottom 40%',
    //           scrub: true,
    //           start: 'top center',
    //         },
    //       });
    //       tl.fromTo(
    //         el,
    //         {
    //           opacity: 0,
    //         },
    //         { opacity: 1, x: 0, y: 0 }
    //       );
    //     });
    //   });
    //   return () => {
    //     mm.revert();
    //   };
    // });
  });

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div
      className="relative top-0 flex min-h-screen w-full flex-col items-center justify-center lg:sticky lg:top-0 lg:justify-start lg:pt-4"
      ref={containRef}
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
    </div>
  );
};
