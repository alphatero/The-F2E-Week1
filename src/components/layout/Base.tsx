import { PropsWithChildren } from 'react';
import { Header } from '../common';

export function Base({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-screen flex-col justify-between bg-secondary pt-14">
      <Header />
      {children}
      <div className="fixed bottom-0 left-0 w-screen bg-bottom object-contain">
        <img className="origin-bottom scale-50" src="/images/main/loading_2x.gif" alt="loading" />
      </div>
    </div>
  );
}
