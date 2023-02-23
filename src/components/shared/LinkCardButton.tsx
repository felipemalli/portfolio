interface ILinkButtonProps {
  enable: boolean,
  name: string,
  link: string,
}

export const LinkButton: React.FC<ILinkButtonProps> = ({ enable, name, link }: ILinkButtonProps) => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <button className={`transition-all duration-200 bg-[#d9d9d9] hover:bg-[#e4e4e4] ${enable ? 'active:bg-green-400' : 'opacity-50 cursor-default'} w-full h-8 rounded-md text-sm`}
      onClick={() => enable && handleClick(link)}
    >
      {name}
    </button>
  );
};
