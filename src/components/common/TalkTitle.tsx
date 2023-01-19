import { forwardRef } from 'react';

type Props = {
  title: string;
  about?: {
    id: number;
    content: string;
  }[];
};

export const TalkTitle = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { title, about } = props;

  return (
    <div className="w-full" ref={ref}>
      <div className="relative flex items-center justify-center">
        <img
          src="/images/bg/bg_talking_l.png"
          alt="bg_talking"
          className="hidden translate-y-2 translate-x-1 lg:block lg:h-[151px]"
        />

        <div className="relative flex w-full items-center justify-center whitespace-nowrap lg:w-auto">
          <img
            className="absolute h-[72px] w-full translate-y-2 lg:h-[151px] "
            src="/images/bg/bg_talking_c.png"
            alt="bg_talking_c"
          />
          <p className="z-10 text-2xl font-bold text-primary lg:text-6xl">{title}</p>
        </div>
        <img
          src="/images/bg/bg_talking_r.png"
          alt="bg_talking"
          className="hidden translate-y-2 -translate-x-1 lg:block lg:h-[151px]"
        />
      </div>
      {about && (
        <div className="flex flex-col items-center text-xl font-bold text-secondary-dark">
          {about.map((item) => (
            <p key={title + item.id}>{item.content}</p>
          ))}
        </div>
      )}
    </div>
  );
});
