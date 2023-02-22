import { backendSkills } from '../../data/skills';
import { CARD_SIZE } from '../shared/Card';
import { SliderFiveColumns } from '../shared/SliderFiveColumns';
import { ProjectArea } from './particular/ProjectArea';
import { SkillArea } from './particular/SkillArea';

export const TopContentCard: React.FC = () => {
  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner bg-[#D5685A]'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none -mb-5'>Projects</h2>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <ProjectArea/>
        <SkillArea skills={backendSkills}/>
      </SliderFiveColumns>
    </div>
  );
};
