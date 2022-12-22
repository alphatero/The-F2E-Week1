import { PropsWithChildren } from 'react';
import { Header } from '../common';

export function Base({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full flex-col justify-between bg-secondary pt-14">
      <Header />
      <div className="bg-secondary pb-28">{children}</div>
      <div className="fixed bottom-0 left-0 w-full bg-bottom object-contain">
        <img
          className="mx-auto origin-bottom scale-50"
          src="/images/main/loading_2x.gif"
          alt="loading"
        />
      </div>
    </div>
  );
}
