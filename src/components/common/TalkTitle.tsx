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
      <div className="relative flex w-full items-center justify-center">
        <img
          className="h-[72px] w-full translate-y-2"
          src="/images/bg/bg_talking_c.png"
          alt="bg_talking_c"
        />
        <p className="absolute text-2xl font-bold text-primary">{title}</p>
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