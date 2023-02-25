import { useEffect, useRef, useState } from 'react';
import { useChangeAreaContext, useCourseContext, useProjectContext, useSearchContext } from '../../../contexts';
import { useCheckbox } from '../../../hooks';
import { ICard } from '../../../interfaces';
import { FilterBox } from './FilterBox';

export const SearchBar: React.FC = () => {
  const { search, setSearch, applyFiltersBoolean } = useSearchContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  const filterBySkill = (cards: ICard[]) => {
    const filteredCards: ICard[] = cards.filter((card: ICard) => (
      (card.techAreas.backend?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) || 
      (card.techAreas.frontend?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) ||
      (card.techAreas.devops?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())))
    ));
    return filteredCards;
  };


  const giveCheckboxAreas = () => {
    return checkboxes
      .filter((checkbox) => checkbox.isChecked)
      .map((checkbox) => checkbox.value);
  };

  const filterByArea = (cards: ICard[]) => {
    const checkboxAreas = giveCheckboxAreas();

    const filteredCards: ICard[] = cards.filter((card: ICard) => (
      (checkboxAreas.some((area: string) => area in card.techAreas))
    ));

    return filteredCards;
  };

  const applyFilters = () => {
    if (areaName === 'knowledge') {
      const filteredProjects = filterBySkill(filterByArea(allProjects));
      const filteredCourses = filterBySkill(filterByArea(allCourses));
      setFilteredProjects(filteredProjects);
      setFilteredCourses(filteredCourses);
    }
    if (areaName === 'skills') {
      console.log('a');
    }
  };

  return (
    <div id='search' className='flex items-center bg-[#fbfbfb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-9 rounded-full p-0.5 shadow-md hover:shadow-lg'>
      <button className='flex justify-center items-center w-7 h-7 left-1 pr-0.5 rounded-full absolute bg-[#d9d9d9] hover:bg-[#eaeced] active:bg-[#d9d9d9]'
        onClick={() => applyFilters()}>
        <img className='w-3.5' src="src/assets/icons/searchIcon.svg" alt='Search technology'></img>
      </button>
      <input type="text" className='text-sm pl-8 bg-[#d9d9d9] rounded-full border-2 border-[#c3b8b8] w-full h-8 focus:border-r-2 focus:border-[#D5685A] outline-none'
        placeholder="Search Technology"
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {showCleanText &&
        <button className={`text-center pl-[1px] w-7 h-7 ${areaName === 'knowledge' ? 'right-10' : 'right-[4px]'} rounded-full absolute text-[#645454] bg-[#d9d9d9] hover:bg-[#eaeced] active:bg-[#d9d9d9]`}
          onClick={() => setSearch('')}>
          X
        </button> 
      }
      {areaName === 'knowledge' &&
        <FilterBox checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} applyFilters={applyFilters} giveCheckboxAreas={giveCheckboxAreas}/>
      }
    </div>
  );
};
