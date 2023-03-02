import { useEffect } from 'react';
import { useChangeAreaContext } from '../../../contexts/ChangeAreaContext';
import { AnimatedDiv } from '../../../hooks/AnimatedDiv';
import { SkillCard } from '../../shared/SkillCard/SkillCard';

interface ISkillAreaProps {
  type: 'top' | 'botton';
  skills: string[];
  setFilteredSkills: (value: string[]) => void,
  setAllSkills: (value: string[]) => void,
  filteredSkills: string[];
}

export const SkillArea: React.FC<ISkillAreaProps> = ({ type, skills, setFilteredSkills, setAllSkills, filteredSkills }: ISkillAreaProps) => {
  const { areaName } = useChangeAreaContext();

  useEffect(() => {
    setFilteredSkills(skills);
    setAllSkills(skills);
  }, []);

  return (
    <AnimatedDiv animationState={areaName === 'skills' ? 'start' : 'stop'} initialAnimation='opacity-50' finalAnimation='opacity-100' duration='duration-400'
      className={`${areaName !== 'skills' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar grid grid-rows-4 grid-flow-col items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {filteredSkills.map((skill) => (
        <SkillCard key={skill} type={type} name={skill}/> 
      ))}
      {filteredSkills.length === 0 && <h3 className='break-normal absolute left-1/2 -translate-x-1/2 font-semibold text-base sm:text-2xl opacity-50'>Skill not found 😭</h3>}
    </AnimatedDiv>
  );
};
