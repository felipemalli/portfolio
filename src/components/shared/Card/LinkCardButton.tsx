import { useLanguageContext } from '../../../contexts';
import { ILinkName } from '../../../interfaces';
import { openUrl } from '../../../utils';

interface ILinkButtonProps {
  enable: boolean,
  name: ILinkName,
  link: string,
}

export const LinkButton: React.FC<ILinkButtonProps> = ({ enable, name, link }: ILinkButtonProps) => {
  const { translations } = useLanguageContext();

  return (
    <button className={`transition-all duration-200 w-full h-8 rounded-md text-sm
      ${name === 'Certificate' ? 'bg-green-400' : 'bg-customGray-400'}
      ${name !== 'Certificate' && enable && 'hover:bg-customGray-300'}
      ${name === 'Certificate' && enable && 'hover:bg-green-300'}
      ${!enable && 'opacity-50 cursor-default'}`}
    onClick={() => enable && openUrl(link)}
    >
      {name === 'Certificate' ? translations.certificate : name}
    </button>
  );
};
