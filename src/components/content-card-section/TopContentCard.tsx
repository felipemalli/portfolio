import { useLanguageContext, useSkillContext } from '../../contexts';
import { useChangeAreaContext } from '../../contexts/ChangeAreaContext';
import { topSkills } from '../../data/skills';
import { CARD_SIZE } from '../shared/Card/Card';
import { SliderFiveColumns } from '../shared/Slider/SliderFiveColumns';
import { ProjectArea } from './particular/ProjectArea';
import { SkillArea } from './particular/SkillArea';

export const TopContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setFilteredTopSkills, setAllTopSkills, filteredTopSkills } = useSkillContext();

  const { translations } = useLanguageContext();

  return (
    <div className='flex flex-col justify-evenly items-center h-[22rem] xl:h-[24rem] 2xl:h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner bg-primary-500'>
      <h2 className={`text-secondary-700 select-none -mb-8 md:-mb-5 h-10 font-semibold ${areaName === 'knowledge' ? 'text-2xl md:text-4xl ' : 'text-[1.3rem] md:text-[2rem]'}`}>
        {areaName === 'knowledge' ? `${translations.content_card_top_title}` : 'BackEnd + DevOps'}
      </h2>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <ProjectArea/>
        <SkillArea type={'top'} skills={topSkills} setFilteredSkills={setFilteredTopSkills} setAllSkills={setAllTopSkills} filteredSkills={filteredTopSkills} />
      </SliderFiveColumns>
    </div>
  );
};
