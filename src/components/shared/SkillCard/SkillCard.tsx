import { useChangeAreaContext, useSearchContext } from '../../../contexts';
import { ISkillCard } from '../../../interfaces';

const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[9px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));

export type ISkillCardProps = ISkillCard

export const SkillCard: React.FC<ISkillCardProps> = ({ name, type }: ISkillCardProps) => {

  const { setSearch, setApplyFiltersBoolean, applyFiltersBoolean } = useSearchContext();
  const { toggleChangeArea } = useChangeAreaContext();

  const handleClick = () => {
    toggleChangeArea();
    setSearch(name);
    setApplyFiltersBoolean(!applyFiltersBoolean);
  };

  return (
    <div className={`sm:touch-none select-none  cursor-pointer ${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300 h-[3rem] ${type === 'top' ? 'bg-secondary-700' : 'bg-[secondary-900]'}`}
      onClick={ () => handleClick()}>
      <h3 className={`flex items-center justify-center h-10 ${CARD_WIDTH} pt-1 text-gray-900 font-medium text-center hover:text-gray-700 text-lg`}>
        {name}
      </h3>
    </div>
  );
};
