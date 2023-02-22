import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { SkillCard } from '../../shared/SkillCard';

interface SkillAreaProps {
  skills: string[]
}

export const SkillArea: React.FC<SkillAreaProps> = ({ skills }: SkillAreaProps) => {
  const { areaName } = useChangeAreaContext();

  return (
    <div id='project-content' className={`${areaName != 'skills' && 'hidden'} w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar grid grid-rows-4 grid-flow-col items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      { skills.map((name) => (
        <SkillCard key={name} type={'backend'} name={name}/>
      )) }
    </div>
  );
};
