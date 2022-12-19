import { Icons } from '@/components/common';

type Props = {
  title: string;
  number: number;
};

export function UserCard({ title, number }: Props) {
  return (
    <li className="flex w-full flex-col items-center space-y-2">
      <p className="text-xl text-primary">{title}</p>
      <div className="flex items-center justify-center">
        <div>
          <div className="rounded-full bg-primary py-1 px-6">
            <p className="flex items-center space-x-1 text-center text-xl text-white">
              <span className="w-[22px]">
                <Icons.Users />
              </span>
              <span className="">{number}</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
