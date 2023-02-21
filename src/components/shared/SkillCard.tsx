const CARD_WIDTH = 'w-[224px]';
const CARD_MARGIN_X = 'mx-[8px]';
export const CARD_SIZE = +(CARD_WIDTH.replace(/[^0-9]/g, '')) + (2*(+(CARD_MARGIN_X.replace(/[^0-9]/g, ''))));

export interface SkillCardProps {
  key?: string,
  type: 'backend' | 'frontend' | 'devops';
  name: string,
}

export const SkillCard: React.FC<SkillCardProps> = ({ key: cardKey, type, name }: SkillCardProps) => {

  return (
    <div key={cardKey} className={`cursor-pointer ${CARD_MARGIN_X} transition ease-in-out hover:scale-105 hover:shadow-md flex flex-col justify-evenly ${CARD_WIDTH} content-between items-center border rounded-2xl border-gray-300  ${type === 'backend' ? 'h-[3rem] bg-[#f9f9f9]' : 'h-[3.575rem] bg-[#f7f7f7]'}`}
      onClick={ () => console.log(name)}>
      <h3 className={`flex items-center justify-center h-10 ${CARD_WIDTH} pt-1 text-gray-900 font-medium text-center hover:text-gray-700 text-lg`}>
        {name}
      </h3>
    </div>
  );
};
