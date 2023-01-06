import { PropsWithChildren } from 'react';
import { Header } from '../common';
import { useRefContext } from '../contexts';
import { Icons } from '@/components';

export const Base = ({ children }: PropsWithChildren) => {
  const { bottomRef, joinButtonRef } = useRefContext();

  return (
    <div className="flex h-screen w-full flex-col justify-between bg-secondary pt-14">
      <Header />
      <div className="bg-secondary pb-28">{children}</div>
      <div className="fixed bottom-0 left-0 w-full bg-bottom object-contain">
        <img
          className="mx-auto origin-bottom"
          src="/images/main/loading_2x.gif"
          alt="loading"
          ref={bottomRef}
        />
        <div
          className="absolute bottom-0 right-0 m-4 flex w-6 flex-col items-center"
          ref={joinButtonRef}
        >
          <p className="py-2 text-xs text-primary">JOIN</p>
          <Icons.JoinBtn join={true} />
        </div>
      </div>
    </div>
  );
};
