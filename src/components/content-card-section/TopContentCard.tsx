import { useEffect, useState } from 'react';
import { useLanguageContext, useProjectContext, useSkillContext } from '../../contexts';
import { useChangeAreaContext } from '../../contexts/ChangeAreaContext';
import { enProjects, ptBrProjects } from '../../data';
import { topSkills } from '../../data/universal/skills';
import { ICard } from '../../interfaces';
import { CARD_SIZE } from '../shared/Card/Card';
import { SliderFiveColumns } from '../shared/Slider/SliderFiveColumns';
import { ContentArea } from './particular/ContentArea';
import { SkillArea } from './particular/SkillArea';

export const TopContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setFilteredTopSkills, setAllTopSkills, filteredTopSkills } = useSkillContext();

  const { translations, language } = useLanguageContext();
  const { filteredProjects, setFilteredProjects, setAllProjects } = useProjectContext();

  const [projects, setProjects] = useState<ICard[]>([]);

  const handleData = () => {
    if (language === 'pt-br') {
      setProjects(ptBrProjects);
    } else {
      setProjects(enProjects);
    }
    setFilteredProjects(projects);
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
        <ContentArea data={projects} filteredData={filteredProjects} setFiltered={setFilteredProjects} setAll={setAllProjects} notFoundTranslation={translations.projects_not_found} />
        <SkillArea type={'top'} skills={topSkills} setFilteredSkills={setFilteredTopSkills} setAllSkills={setAllTopSkills} filteredSkills={filteredTopSkills} />
      </SliderFiveColumns>
    </div>
  );
};
