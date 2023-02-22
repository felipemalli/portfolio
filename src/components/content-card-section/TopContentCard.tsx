import { useChangeAreaContext } from '../../contexts/changeAreaContext';
import { topSkills } from '../../data/skills';
import { CARD_SIZE } from '../shared/Card';
import { SliderFiveColumns } from '../shared/SliderFiveColumns';
import { ProjectArea } from './particular/ProjectArea';
import { SkillArea } from './particular/SkillArea';

export const TopContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();

  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner bg-[#D5685A]'>
      <h2 className={`text-[#f9f9f9] select-none -mb-5 font-semibold ${areaName === 'knowledge' ? 'text-4xl ' : 'text-[2rem]'}`}>
        {areaName === 'knowledge' ? 'Projects' : 'BackEnd + DevOps'}
      </h2>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <ProjectArea/>
        <SkillArea skills={topSkills}/>
      </SliderFiveColumns>
    </div>
  );
};
