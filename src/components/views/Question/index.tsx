import { TalkTitle, useRefContext } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const questionList = [
  {
    id: 1,
    title: '羨慕別人的酷酷網頁動畫？',
    image: '/images/main/question_1_m.png',
  },
  {
    id: 2,
    title: '滿足不了同事的許願？',
    image: '/images/main/question_2.png',
  },
  {
    id: 3,
    title: '動畫技能樹太雜無從下手？',
    image: '/images/main/question_3_m.png',
  },
];

export const Question = () => {
  const { questionRef } = useRefContext();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="你是否也有以下困擾？" ref={questionRef} />
        <ul>
          {questionList.map((question) => (
            <li
              key={`question_${question.id}`}
              className="flex flex-col items-center space-y-2 px-5"
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
