import { forwardRef } from 'react';

export const Background = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="absolute bottom-1/3 flex w-full translate-y-8 justify-between overflow-hidden"
      ref={ref}
    >
      <img
        src="/images/bg/bg_decorate_01.png"
        className="w-[113px] -translate-x-5 object-contain lg:w-[430px] lg:pl-32"
        alt="decorate"
      />
      <img
        src="/images/bg/bg_decorate_05.png"
        className="w-[127px] translate-x-9 object-contain lg:w-[485px] lg:pr-20"
        alt="decorate"
      />
    </div>
  );
});
