import { TalkTitle } from '@/components/common';
import { GuideCard } from './GuideCard';

const guideList = [
  {
    week: 1,
    title: 'The F2E 活動網站設計',
    info: ['Parallax Scrolling', '#版塊設計'],
  },
  {
    week: 2,
    title: '今晚，我想來點點簽',
    info: ['Canvas', '#凱鈿行動科技'],
  },
  {
    week: 3,
    title: 'Scrum 新手村',
    info: ['JS draggable', '#鈦坦科技'],
  },
];

interface itemType {
  week: number;
  title: string;
  info: string[];
}

const about = [
  {
    id: 1,
    content: '各路廠商強強聯手',
  },
  {
    id: 2,
    content: '共同設計出接地氣的網頁互動挑戰關卡',
  },
];

export function Guide() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="年度最強合作，三大主題來襲" about={about} />
        {/* <div className="flex w-full flex-col items-center">
          <div className="relative flex w-full items-center justify-center">
            <img
              className="h-[72px] w-full translate-y-2"
              src="/images/bg/bg_talking_c.png"
              alt=""
            />
            <p className="absolute text-2xl text-primary">年度最強合作，三大主題來襲</p>
          </div>
          <p className="pt-4 text-xl text-secondary-dark">各路廠商強強聯手</p>
          <p className="text-xl text-secondary-dark">共同設計出接地氣的網頁互動挑戰關卡</p>
        </div> */}

        <ul>
          {guideList.map((item: itemType) => {
            return <GuideCard item={item} key={item.week} />;
          })}
        </ul>
      </div>
    </div>
  );
}
