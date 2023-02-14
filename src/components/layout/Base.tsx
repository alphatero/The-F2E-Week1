import { PropsWithChildren } from 'react';
import { Header, Bottom } from '../common';
import clsx from 'clsx';

export const Base = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-col justify-between bg-secondary pt-14',
        'h-screen lg:relative lg:pt-0'
      )}
    >
      <Header />
      <div className="relative w-full bg-secondary pb-28 lg:pb-0">{children}</div>
      <Bottom />
    </div>
  );
};
