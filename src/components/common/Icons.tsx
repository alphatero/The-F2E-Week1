import { ReactComponent as Users } from '@/assets/svg/ic_users.svg';

type JoinBtnProps = {
  join?: boolean;
};

const JoinBtn = ({ join }: JoinBtnProps) => {
  return (
    <div className="flex flex-col items-center">
      {join && (
        <img
          className="w-[57px] animate-bounce"
          src="/images/btn/btn_joinHand.png"
          alt="join_hand"
        />
      )}
      <img className="w-[103px]" src="/images/btn/btn_join.png" alt="join_button" />
    </div>
  );
};

export const Icons = {
  Users,
  JoinBtn,
};
