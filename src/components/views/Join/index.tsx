export function Join() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-10">
        <div className="flex w-full items-center justify-center">
          <img src="/images/logo/logo.png" className="w-[253px]" alt="logo" />
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[57px] animate-bounce"
            src="/images/btn/btn_joinHand.png"
            alt="join_hand"
          />
          <img className="h-[60px]" src="/images/btn/btn_join.png" alt="join_button" />
          <p className="py-4 text-3xl font-bold text-highlight">立即報名</p>
        </div>
      </div>
    </div>
  );
}
