import React from 'react';
import { Header, Background, Icons } from './components';
import './App.css';

type Props = {
  title: string;
  number: number;
};

function UserCard({ title, number }: Props) {
  return (
    <li className="flex w-full flex-col items-center space-y-2">
      <p className="text-xl text-primary">{title}</p>
      <div className="flex items-center justify-center">
        <div>
          <div className="rounded-full bg-primary py-2 px-6">
            <p className="flex items-center space-x-1 text-center text-xl text-white">
              <span className="w-[22px]">
                <Icons.Users />
              </span>
              <span className="">{number}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-secondary">
      <Background />
      <Header />
      <main className="flex flex-col pt-8">
        <div className="flex w-full items-center justify-center">
          <img src="/images/logo/logo.png" className="w-[253px]" alt="logo" />
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-5 py-5">
          <div className="rounded-full bg-highlight py-1 px-4">
            <p className="text-xl text-white">互動式網頁設計</p>
          </div>
        </div>
        <ul>
          <UserCard title="前端工程師" number={920} />
          <UserCard title="UI設計師" number={110} />
          <UserCard title="團體組" number={41} />
        </ul>
      </main>
    </div>
  );
}

export default App;
