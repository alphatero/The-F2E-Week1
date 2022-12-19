import { Background } from './Background';
import { UserCard } from './UserCard';

export const FirstScreen = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
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
        <UserCard title="前端工程師" number={920} />
        <UserCard title="UI設計師" number={110} />
        <UserCard title="團體組" number={41} />
      </ul>
      <button className="absolute bottom-1/3 right-0 flex w-[120px] -translate-y-4 flex-col">
        <p className="-translate-x-2 text-highlight">READY?</p>
        <div className="flex">
          <div className="flex space-x-1 p-3">
            <img className="w-6" src="/images/main/ready_3.png" alt="ready_3" />
            <img className="w-6" src="/images/main/ready_2.png" alt="ready_2" />
            <img className="w-6" src="/images/main/ready_1.png" alt="ready_1" />
          </div>
          <img className="absolute" src="/images/main/ready_frame.png" alt="ready-frame" />
        </div>
      </button>
    </div>
  );
};
