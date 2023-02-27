import { ILinkName } from '../../../interfaces';
import { openUrl } from '../../../utils/openUrl';

interface ILinkButtonProps {
  enable: boolean,
  name: ILinkName,
  link: string,
}

export const LinkButton: React.FC<ILinkButtonProps> = ({ enable, name, link }: ILinkButtonProps) => {
  return (
    <button className={`transition-all duration-200 w-full h-8 rounded-md text-sm
      ${name === 'Certificate' ? 'bg-green-400' : 'bg-[#d9d9d9]'}
      ${name !== 'Certificate' && enable && 'hover:bg-[#e4e4e4]'}
      ${name === 'Certificate' && enable && 'hover:bg-green-300'}
      ${!enable && 'opacity-50 cursor-default'}`}
    onClick={() => enable && openUrl(link)}
    >
      {name}
    </button>
  );
};
