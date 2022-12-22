import { TalkTitle } from '@/components/common';

const sponsorList = [
  {
    id: 1,
    title: '版塊設計',
    image: '/images/main/logo_blockstudio.png',
  },
  {
    id: 2,
    title: '鈦坦科技',
    image: '/images/main/logo_titansoft.png',
  },
  {
    id: 3,
    title: '凱鈿科技',
    image: '/images/main/logo_kdanmobile.png',
  },
];

export function Sponsor() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center space-y-6">
        <div className="flex w-full flex-col items-center">
          <TalkTitle title="贊助單位" />
          <div className="px-5">
            <ul>
              {sponsorList.map((sponsor) => (
                <li
                  key={`sponsor_${sponsor.id}`}
                  className="flex flex-col items-center space-y-4 py-10"
                >
                  <div className="relative w-[252px] bg-btn-sponsor bg-contain bg-no-repeat p-5">
                    <img src={sponsor.image} alt={sponsor.title} />
                  </div>
                  <div className="rounded-full border-2 border-secondary-dark text-center text-secondary-dark">
                    <p className="py-1 px-6 text-lg font-bold">#{sponsor.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
