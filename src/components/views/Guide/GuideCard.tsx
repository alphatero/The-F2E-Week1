type Props = {
  item: {
    week: number;
    title: string;
    info: string[];
  };
};

export function GuideCard({ item }: Props) {
  const { week, title, info } = item;
  return (
    <li className="flex flex-col items-center space-y-5">
      <img className="w-[200px]" src="/images/main/week_1.png" alt="week_1" />
      <h2 className="text-highlight">WEEK {week}</h2>
      <h3 className="text-primary">{title}</h3>
      <ul className="flex flex-col items-center space-y-4">
        {info.map((content) => {
          return (
            <li
              key={`info_${content}`}
              className="rounded-full border-2 border-secondary-dark text-center text-secondary-dark"
            >
              <p className="py-1 px-6 text-lg">{content}</p>
            </li>
          );
        })}
      </ul>

      <button className="rounded-full bg-secondary-dark text-center text-white">
        <p className="py-1 px-6 text-lg">查看關卡細節</p>
      </button>
    </li>
  );
}
