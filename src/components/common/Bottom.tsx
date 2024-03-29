import { useRefContext } from '../contexts';
import { Icons } from '@/components';

export const Bottom = () => {
  const { bottomRef, joinButtonRef, deskBottomRef } = useRefContext();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-bottom object-contain">
      <img
        className="mx-auto origin-bottom lg:hidden"
        src="/images/main/loading_2x.gif"
        alt="loading"
        ref={bottomRef}
      />

      <div
        className="absolute bottom-0 hidden w-full origin-bottom items-end justify-center lg:flex"
        ref={deskBottomRef}
      >
        <div className="origin-bottom transition-all duration-150 hover:scale-105">
          <img
            src="/images/character/character_f2e.gif"
            className="w-[302px]"
            alt="character_f2e"
          />
        </div>
        <div className="origin-bottom transition-all duration-150 hover:scale-105">
          <img
            src="/images/character/character_ui.gif"
            className="w-[319px]"
            alt="character_team"
          />
        </div>
        <div className="origin-bottom transition-all duration-150 hover:scale-105">
          <img
            src="/images/character/character_team.gif"
            className="w-[302px]"
            alt="character_ui"
          />
        </div>
      </div>
      <img src="/images/main/road.png" className="mx-auto hidden w-[1175px] lg:block" alt="road" />
      <div
        className="absolute bottom-0 right-0 m-4 flex w-6 flex-col items-center lg:w-[103px]"
        ref={joinButtonRef}
      >
        <p className="py-2 text-xs text-primary">JOIN</p>
        <Icons.JoinBtn join={true} />
      </div>
    </div>
  );
};
