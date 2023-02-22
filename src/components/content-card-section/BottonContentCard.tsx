import { useChangeAreaContext } from '../../contexts/changeAreaContext';
import { bottonSkills } from '../../data/skills';
import { CARD_SIZE } from '../shared/Card';
import { SliderFiveColumns } from '../shared/SliderFiveColumns';
import { CourseArea } from './particular/CourseArea';
import { SkillArea } from './particular/SkillArea';

export const BottonContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();

  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-b-[5rem] border border-[#737E86] bg-[#fbfbfb] pt-1'>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <CourseArea/>
        <SkillArea skills={bottonSkills}/>
      </SliderFiveColumns>
      <h2 className={`text-[#272727] select-none -mt-2 font-semibold ${areaName === 'knowledge' ? 'text-4xl ' : 'text-[2rem]'}`}>
        {areaName === 'knowledge' ? 'Courses' : 'FrontEnd + UI/UI'}
      </h2>
    </div>
  );
};
