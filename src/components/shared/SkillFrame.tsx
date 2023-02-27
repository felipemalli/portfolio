import { useEffect, useState } from 'react';
import { useSearchContext } from '../../contexts';
import { ITechAreaNames } from '../../interfaces';

export interface ISkillFrameProps {
  techArea: ITechAreaNames;
  inProgress?: boolean,
  skills: string[];
}

type ISkillsByEight = string[][]

export const SkillFrame: React.FC<ISkillFrameProps> = ({ techArea, skills, inProgress }: ISkillFrameProps) => {
  const [page, setPage] = useState<number>(0);
  const [skillsByEight, setSkillsByEight] = useState<ISkillsByEight>();

  const maxCharactersAndSpaces = (str: string) => {
    const characters = str.length;
    const spaces = str.split(' ').length - 1;
    return (characters + spaces) > 11;
  };

  const chunkArray = (arr: string[], chunkSize: number): string[][] => {
    const chunks: string[][] = [];
    let i = 0;
    while (i < arr.length) {
      chunks.push(arr.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return chunks;
  };

  useEffect(() => {
    setSkillsByEight(chunkArray(skills, 8));
    setPage(0);
  }, [techArea]);


  const { setSearch, setApplyFiltersBoolean, applyFiltersBoolean } = useSearchContext();

  const handleClick = (skill: string) => {
    setSearch(skill);
    setApplyFiltersBoolean(!applyFiltersBoolean);
  };

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-4 border border-[#cfcfcf] rounded-lg relative">
      <hr className="absolute rotate-90 bg-[#cfcfcf] w-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
      <hr className="absolute bg-[#cfcfcf] w-52 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4"/>
      <hr className="absolute bg-[#cfcfcf] w-52 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
      <hr className="absolute bg-[#cfcfcf] w-52 bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/4"/>
      {skillsByEight && skillsByEight[page].map((skill) => (
        <button className={`w-full ${maxCharactersAndSpaces(skill) ? 'text-xs pt-[8px]' : 'text-sm '} pb-1 pt-[7px] px-1.5 font-light flex justify-start hover:bg-[#eaeced] active:bg-[#f9f9f9]`} key={skill + String(Date.now())}
          onClick={() => handleClick(skill)}
        >
          <p className={'truncate overflow-hidden overflow-ellipsis'}>{skill}</p>
        </button>
      ))}
      {skillsByEight && page !== 0 && (
        <button className='absolute -left-[4px] top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs w-9 p-2.5 z-10' onClick={() => setPage(page - 1)}>
          <img src="src/assets/icons/circularArrow.svg" alt='Previous page button'></img>
        </button>
      )}
      {skillsByEight && skillsByEight.length > 1 && page < skillsByEight.length - 1 && (
        <button className='absolute -right-[22px] top-1/2 -translate-y-1/2  text-xs rotate-180 w-9 p-2.5 z-10' onClick={() => setPage(page + 1)}>
          <img src="src/assets/icons/circularArrow.svg" alt='Next page button'></img>
        </button>
      )}
      {inProgress && <div className='absolute bg-[#FC6363] w-full text-center font-medium text-[#2E3E4B] text-sm py-1.5 opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>In progress</div>}
    </div>
  );
};
