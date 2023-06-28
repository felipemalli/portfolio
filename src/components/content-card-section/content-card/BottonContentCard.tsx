import { useEffect } from 'react';
import { useChangeAreaContext, useCourseContext, useLanguageContext, useSkillContext } from '../../../contexts';
import { enCourses, ptBrCourses, bottonSkills } from '../../../data';
import { ContentArea, SkillArea } from './areas';
import { SliderFiveColumns } from './slider/SliderFiveColumns';
import { CARD_SIZE } from './cards/Card';

export const BottonContentCard: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { translations, language } = useLanguageContext();

  const { setFilteredBottonSkills, setAllBottonSkills, filteredBottonSkills } = useSkillContext();
  const { filteredCourses, setFilteredCourses, allCourses, setAllCourses } = useCourseContext();

  const handleData = () => {
    if (language === 'pt-br') {
      setAllCourses(ptBrCourses);
    } else {
      setAllCourses(enCourses);
    }
    setFilteredCourses(allCourses);
  };

  useEffect(() => {
    handleData();
  }, [translations, language]);
  
  return (
    <div className='flex flex-col justify-evenly items-center h-[22rem] xl:h-[24rem] 2xl:h-[26rem] m-auto md:rounded-b-[5rem] border-y md:border border-customBlue-300 bg-secondary-500 pt-1'>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <ContentArea data={allCourses} filteredData={filteredCourses} setFiltered={setFilteredCourses} notFoundTranslation={translations.courses_not_found} />
        <SkillArea type={'botton'} skills={bottonSkills} setFilteredSkills={setFilteredBottonSkills} setAllSkills={setAllBottonSkills} filteredSkills={filteredBottonSkills} />
      </SliderFiveColumns>
      <h2 className={`text-customBlue-900 select-none -mt-7 pt-3 md:pt-0 md:-mt-3 h-10 font-semibold ${areaName === 'knowledge' ? 'text-2xl md:text-4xl ' : 'text-[1.3rem] md:text-[2rem]'}`}>
        {areaName === 'knowledge' ? `${translations.content_card_botton_title}` : 'FrontEnd + UI/UX'}
      </h2>
    </div>
  );
};
