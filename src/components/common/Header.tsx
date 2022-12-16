import { useState } from 'react';
import clsx from 'clsx';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="flex h-14 justify-between">
        <div className="flex w-full justify-between pt-2">
          <div className="w-10" />
          <h1 className="w-[133px]">
            <img src="/images/logo/logo_text.png" alt="logo" />
          </h1>
          <button className="relative pr-2">
            <div className="w-10">
              <img src="/images/btn/btn_user.png" className="mr-2" alt="user-button" />
            </div>
          </button>
        </div>
        <aside className="absolute flex">
          <div
            className={clsx(
              'absolute h-screen w-screen bg-secondary bg-opacity-80',
              'transition-all duration-300 ease-in-out',
              !isMenuOpen && 'opacity-0'
            )}
          />
          <div
            className={clsx(
              'z-10 flex items-start transition-all duration-300 ease-in-out',
              !isMenuOpen && '-translate-x-[152px]'
            )}
          >
            <nav className="h-screen bg-primary">
              <ul className="flex flex-col space-y-10 px-10 pt-10 text-lg text-secondary">
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
            <button className="w-10 pt-3" onClick={handleClick}>
              <div
                className={clsx(
                  'h-11 bg-contain bg-no-repeat',
                  isMenuOpen ? 'bg-open-menu' : 'bg-close-menu'
                )}
              />
            </button>
          </div>
        </aside>
      </header>
    </>
  );
};
