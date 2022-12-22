import { Icons, TalkTitle } from '@/components/common';
import clsx from 'clsx';

interface roleTypes {
  id: number;
  title: string;
  image: string;
  join?: boolean;
}

const roleList: roleTypes[] = [
  {
    id: 1,
    title: '前端工程師',
    image: '/images/character/character_f2e.png',
    join: true,
  },
  {
    id: 2,
    title: 'UI設計師',
    image: '/images/character/character_ui.png',
  },
  {
    id: 3,
    title: '團體組(UI+前端)',
    image: '/images/character/character_team.png',
  },
];

const about = [
  {
    id: 1,
    content: '以下兩個角色進行攜手合作',
  },
];

export function Roles() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <TalkTitle title="本屆主題：互動式網頁設計？" about={about} />
        <ul>
          {roleList.map((role) => (
            <li key={`role_${role.id}`} className="flex items-center space-x-4 px-5">
              <img
                src={role.image}
                className={clsx('w-[158px]', role.id === 2 && 'order-2')}
                alt={role.title}
              />
              <div className="flex flex-col items-center px-4">
                <Icons.JoinBtn join={role.join} />
                <p className="pt-4 text-xl text-primary">{role.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
