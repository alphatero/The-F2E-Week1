import { useState } from 'react';
import clsx from 'clsx';
import { useRefContext } from '../contexts';

type Props = {
  icon: string;
  text: string;
  link: string;
};

const MenuItem = ({ icon, text, link }: Props) => {
  return (
    <li>
      <a href={link}>
        <img src={icon} className="w-[60px]" alt="info" />
        <p>{text}</p>
      </a>
    </li>
  );
};

export const Header = () => {
  const { desktopLogoRef } = useRefContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 z-20 flex h-14 w-full justify-between">
        <div className="flex w-full justify-between pt-2 lg:px-5">
          <div className="w-10 lg:hidden" />
          <h1 className="w-[133px]">
            <img className="lg:hidden" src="/images/logo/logo_text.png" alt="logo" />
            <div className="opacity-0" ref={desktopLogoRef}>
              <img className="hidden lg:block" src="/images/logo/logo.png" alt="logo" />
            </div>
          </h1>
          <button className="relative pr-2 lg:pr-0">
            <div className="w-10">
              <img src="/images/btn/btn_user.png" className="mr-2" alt="user-button" />
            </div>
          </button>
        </div>
        <div
          className={clsx(
            'absolute h-screen w-screen bg-secondary bg-opacity-80',
            'transition-all duration-300 ease-in-out',
            !isMenuOpen && 'sr-only opacity-0'
          )}
        />
        <aside
          className={clsx(
            'absolute flex',
            'transition-all duration-300 ease-in-out',
            !isMenuOpen && '-translate-x-[152px] lg:-translate-x-[140px]'
          )}
        >
          <div className={clsx('z-10 flex items-start transition-all duration-300 ease-in-out')}>
            <nav className="h-screen bg-primary">
              <ul className="flex flex-col space-y-10 p-10 text-lg text-secondary">
                <MenuItem
                  icon="/images/ic/ic_menu_info.png"
                  text="關卡資訊"
                  link="https://2022.thef2e.com/news"
                />
                <MenuItem
                  icon="/images/ic/ic_menu_list.png"
                  text="作品列表"
                  link="https://2022.thef2e.com/works"
                />
                <MenuItem
                  icon="/images/ic/ic_menu_strategy.png"
                  text="攻略資源"
                  link="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w"
                />
                <MenuItem
                  icon="/images/ic/ic_menu_job.png"
                  text="求職專區"
                  link="https://2022.thef2e.com/jobs"
                />
              </ul>
            </nav>
            <button className="w-10 pt-3 lg:self-center" onClick={handleClick}>
              <div
                className={clsx(
                  'h-11 bg-contain bg-no-repeat',
                  isMenuOpen ? 'bg-close-menu' : 'bg-open-menu'
                )}
              />
            </button>
          </div>
        </aside>
      </header>
    </>
  );
};
