import { useLanguageContext, useSkillContext } from '../../contexts';
import { useChangeAreaContext } from '../../contexts/ChangeAreaContext';
import { bottonSkills } from '../../data/skills';
import { CARD_SIZE } from '../shared/Card/Card';
import { SliderFiveColumns } from '../shared/Slider/SliderFiveColumns';
import { CourseArea } from './particular/CourseArea';
import { SkillArea } from './particular/SkillArea';

export const BottonContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setFilteredBottonSkills, setAllBottonSkills, filteredBottonSkills } = useSkillContext();

  const { translations } = useLanguageContext();
  
  return (
    <div className='flex flex-col justify-evenly items-center h-[22rem] xl:h-[24rem] 2xl:h-[26rem] m-auto md:rounded-b-[5rem] border-y md:border border-customBlue-300 bg-secondary-500 pt-1'>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <CourseArea/>
        <SkillArea type={'botton'} skills={bottonSkills} setFilteredSkills={setFilteredBottonSkills} setAllSkills={setAllBottonSkills} filteredSkills={filteredBottonSkills} />
      </SliderFiveColumns>
      <h2 className={`text-customBlue-900 select-none -mt-7 pt-3 md:pt-0 md:-mt-3 h-10 font-semibold ${areaName === 'knowledge' ? 'text-2xl md:text-4xl ' : 'text-[1.3rem] md:text-[2rem]'}`}>
        {areaName === 'knowledge' ? `${translations.content_card_botton_title}` : 'FrontEnd + UI/UX'}
      </h2>
    </div>
  );
};
