// import { forwardRef, PropsWithRef, Ref, useEffect } from 'react';
import { Background } from './Background';
import { UserCard, UserInfoTypes } from './UserCard';
import { useRefContext } from '@/components';

const userInfoList: UserInfoTypes[] = [
  {
    title: '前端工程師',
    number: 920,
  },
  {
    title: 'UI設計師',
    number: 110,
  },
  {
    title: '團體組',
    number: 41,
  },
];

export const Start = () => {
  const { readyRef, startRef } = useRefContext();

  return (
    <div className="relative flex min-h-screen flex-col pt-8" ref={startRef}>
      <Background />
      <div className="flex w-full items-center justify-center">
        <img src="/images/logo/logo.png" className="w-[253px]" alt="logo" />
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-5 py-5">
        <div className="rounded-full bg-highlight py-1 px-4">
          <p className="text-xl text-white">互動式網頁設計</p>
        </div>
      </div>
      <ul className="flex h-full flex-col space-y-4">
        {userInfoList.map((user) => (
          <UserCard key={`user_card_${user.title}`} title={user.title} number={user.number} />
        ))}
      </ul>
      <button
        className="absolute bottom-1/3 right-0 flex w-[120px] -translate-y-4 flex-col"
        ref={readyRef}
      >
        <p className="-translate-x-2 text-highlight">READY?</p>
        <div className="flex">
          <div className="flex space-x-1 p-3">
            {[1, 2, 3].map((number) => (
              <img
                className="w-6"
                key={`start_image_${number}`}
                src={`/images/main/ready_${number}.png`}
                alt={`ready_${number}`}
              />
            ))}
          </div>
          <img className="absolute" src="/images/main/ready_frame.png" alt="ready-frame" />
        </div>
      </button>
    </div>
  );
};
