import { useEffect, useRef, useState } from 'react';
import { useChangeAreaContext, useCourseContext, useLanguageContext, useProjectContext, useSearchContext, useSkillContext } from '../../../contexts';
import { useCheckbox } from '../../../hooks';
import { ICard } from '../../../interfaces';
import { FilterBox } from './FilterBox';

export const SearchBar: React.FC = () => {
  const { search, setSearch, applyFiltersBoolean } = useSearchContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { translations } = useLanguageContext();

  const checkboxValues = [
    { id: 1, value: 'frontend', label: 'FrontEnd', isChecked: true },
    { id: 2, value: 'backend', label: 'BackEnd', isChecked: true },
    { id: 3, value: 'devops', label: 'DevOps', isChecked: true },
  ];
  
  const { checkboxes, handleCheckboxChange } = useCheckbox(checkboxValues);

  useEffect(() => {
    const handleEnterPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        applyFilters();
      }
    };
    inputRef.current?.addEventListener('keydown', handleEnterPress);
    return () => {
      inputRef.current?.removeEventListener('keydown', handleEnterPress);
    };
  });


  const { allProjects, setFilteredProjects } = useProjectContext();
  const { allCourses, setFilteredCourses } = useCourseContext();
  const { allBottonSkills, allTopSkills, setFilteredBottonSkills, setFilteredTopSkills } = useSkillContext();
  const { areaName } = useChangeAreaContext();
  const [showCleanText, setShowCleanText] = useState<boolean>(false);

  useEffect(() => {
    applyFilters();
  }, [checkboxes, applyFiltersBoolean]);

  useEffect(() => {
    if (!search) {
      applyFilters();
      setShowCleanText(false);
    } else {
      setShowCleanText(true);
    }
  }, [search]);

  const filterCardBySkill = (cards: ICard[], exactSkill?: boolean) => {
    let filteredCards: ICard[];
    if (exactSkill) {
      filteredCards = cards.filter((card: ICard) => (
        (card.techAreas.backend?.skills.some((skill) => skill.toLowerCase() === (search.toLowerCase()))) || 
        (card.techAreas.frontend?.skills.some((skill) => skill.toLowerCase() === (search.toLowerCase()))) ||
        (card.techAreas.devops?.skills.some((skill) => skill.toLowerCase() === (search.toLowerCase()))) ||
        (card.techAreas.other?.skills.some((skill) => skill.toLowerCase() === (search.toLowerCase())))
      ));
    } else {
      filteredCards = cards.filter((card: ICard) => (
        (card.techAreas.backend?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) || 
        (card.techAreas.frontend?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) ||
        (card.techAreas.devops?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) ||
        (card.techAreas.other?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())))
      ));
    }
    return filteredCards;
  };

  const giveCheckboxAreas = () => {
    return checkboxes
      .filter((checkbox) => checkbox.isChecked)
      .map((checkbox) => checkbox.value);
  };

  const filterCardByArea = (cards: ICard[]) => {
    const checkboxAreas = giveCheckboxAreas();

    const filteredCards: ICard[] = cards.filter((card: ICard) => (
      (checkboxAreas.some((area: string) => area in card.techAreas)) ||
      ((checkboxAreas.length === 3 || checkboxAreas.length === 0) && card.techAreas.other?.name)
    ));

    return filteredCards;
  };

  const filterBySkill = (skills: string[], exactSkill?: boolean) => {
    let filteredSkills: string[];
    if (exactSkill) {
      filteredSkills = skills.filter((skill: string) => (
        skill.toLowerCase() === (search.toLowerCase())
      ));
    } else {
      filteredSkills = skills.filter((skill: string) => (
        skill.toLowerCase().includes(search.toLowerCase())
      ));
    }
    return filteredSkills;
  };

  const checkIfExactSkill = () => {
    const equalTopSkill = allTopSkills.some((skill) => skill.toLowerCase() === search.toLowerCase());
    const equalBottonSkill = allBottonSkills.some((skill) => skill.toLowerCase() === search.toLowerCase());
    return equalBottonSkill || equalTopSkill;
  };

  const applyFilters = () => {
    const isExactSkill = checkIfExactSkill();

    if (allProjects.length > 0) {
      const filteredProjects = filterCardBySkill(filterCardByArea(allProjects), isExactSkill);
      setFilteredProjects(filteredProjects);
    }
    if (allCourses.length > 0) {
      const filteredCourses = filterCardBySkill(filterCardByArea(allCourses), isExactSkill);
      setFilteredCourses(filteredCourses);
    }
    if (allBottonSkills.length > 0) {
      const filteredBottonSkills = filterBySkill(allBottonSkills, isExactSkill);
      setFilteredBottonSkills(filteredBottonSkills);
    }
    if (allTopSkills.length > 0) {
      const filteredTopSkills = filterBySkill(allTopSkills, isExactSkill);
      setFilteredTopSkills(filteredTopSkills);
    }
  };

  return (
    <div className='flex items-center bg-secondary-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-9 rounded-full p-0.5 shadow-md hover:shadow-lg'>
      <button className='flex justify-center items-center w-7 h-7 left-1 pr-0.5 rounded-full absolute bg-customGray-400 hover:bg-customGray-200 active:bg-customGray-400'
        onClick={() => applyFilters()}>
        <img className='w-3.5' src='./assets/icons/searchIcon.svg' alt='Search technology'></img>
      </button>
      <input type="text" className='text-sm pl-8 bg-customGray-400 rounded-full border-2 border-customGray-600 w-full h-8 focus:border-r-2 focus:border-primary-500 outline-none'
        placeholder={translations.search_placeholder}
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {showCleanText &&
        <button className={`w-7 h-7 ${areaName === 'knowledge' ? 'right-11' : 'right-[4px]'} rounded-full absolute  bg-customGray-400 hover:bg-customGray-200 active:bg-customGray-400`}
          onClick={() => setSearch('')}>
          <p className='text-icon text-center text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-[1px] pl-[1px]'>x</p>
        </button> 
      }
      {areaName === 'knowledge' &&
        <FilterBox checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} applyFilters={applyFilters} giveCheckboxAreas={giveCheckboxAreas}/>
      }
    </div>
  );
};
