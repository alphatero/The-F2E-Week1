import { Icons, TalkTitle } from '@/components/common';
import clsx from 'clsx';

const scheduleList = [
  {
    id: 1,
    title: 'SIGN UP',
    date: '10/13 - 11/6',
    image: <Icons.JoinBtn join={true} />,
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
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <div className="flex w-full flex-col items-center">
          <TalkTitle title="重要時程" />
          <ul>
            {scheduleList.map((schedule) => (
              <li
                key={`schedule_${schedule.id}`}
                className="flex flex-col items-center space-y-4 py-10"
              >
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
              </li>
            ))}
          </ul>
          <h2 className="flex flex-col text-center text-highlight">
            <span>區區修煉</span>
            <span>已經無法滿足了嗎？</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
