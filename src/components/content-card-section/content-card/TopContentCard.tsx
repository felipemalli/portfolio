import { useEffect } from 'react';
import { useChangeAreaContext, useLanguageContext, useProjectContext, useSkillContext } from '../../../contexts';
import { enProjects, ptBrProjects, topSkills } from '../../../data';
import { ContentArea, SkillArea } from './areas';
import { SliderFiveColumns } from './slider/SliderFiveColumns';
import { CARD_SIZE } from './cards/Card';

export const TopContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { translations, language } = useLanguageContext();

  const { setFilteredTopSkills, setAllTopSkills, filteredTopSkills } = useSkillContext();
  const { filteredProjects, setFilteredProjects, setAllProjects, allProjects } = useProjectContext();

  const handleData = () => {
    if (language === 'pt-br') {
      setAllProjects(ptBrProjects);
    } else {
      setAllProjects(enProjects);
    }
    setFilteredProjects(allProjects);
  };

  useEffect(() => {
    handleData();
  }, [translations, language]);

  return (
    <div className='flex flex-col justify-evenly items-center h-[22rem] xl:h-[24rem] 2xl:h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner bg-primary-500'>
      <h2 className={`text-secondary-700 select-none -mb-8 md:-mb-5 h-10 font-semibold ${areaName === 'knowledge' ? 'text-2xl md:text-4xl ' : 'text-[1.3rem] md:text-[2rem]'}`}>
        {areaName === 'knowledge' ? `${translations.content_card_top_title}` : 'BackEnd + DevOps'}
      </h2>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <ContentArea data={allProjects} filteredData={filteredProjects} setFiltered={setFilteredProjects} notFoundTranslation={translations.projects_not_found} />
        <SkillArea type={'top'} skills={topSkills} setFilteredSkills={setFilteredTopSkills} setAllSkills={setAllTopSkills} filteredSkills={filteredTopSkills} />
      </SliderFiveColumns>
    </div>
  );
};
