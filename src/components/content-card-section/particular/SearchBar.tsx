import { useEffect, useRef, useState } from 'react';
import { useCourseContext } from '../../../contexts/courseContext';
import { useCheckbox } from '../../../hooks';
import { ICard } from '../../../interfaces';
// import { useProjectContext } from '../../../contexts/projectContext';

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filterBox, setFilterBox] = useState<boolean>(false);
  
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


  // const { allProjects, filteredProjects, setFilteredProjects } = useProjectContext();
  const { allCourses, setFilteredCourses } = useCourseContext();

  const checkboxValues = [
    { id: 1, value: 'frontend', label: 'Front End', isChecked: true },
    { id: 2, value: 'backend', label: 'Back End', isChecked: true },
    { id: 3, value: 'devops', label: 'DevOps', isChecked: true },
  ];
  
  const { checkboxes, handleCheckboxChange } = useCheckbox(checkboxValues);

  useEffect(() => {
    if (!search) {
      setFilteredCourses(allCourses);
    }
  }, [search]);

  const filterBySkill = (cards: ICard[]) => {
    const filteredCards: ICard[] = cards.filter((tech: ICard) => (
      (tech.techAreas.backend?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) || 
      (tech.techAreas.frontend?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))) ||
      (tech.techAreas.devops?.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())))
    ));
    return filteredCards;
  };

  const filterByArea = (cards: ICard[]) => {
    const checkboxAreas = checkboxes
      .filter((checkbox) => checkbox.isChecked)
      .map((checkbox) => checkbox.value);

    const filteredCards: ICard[] = cards.filter((tech: ICard) => (
      (checkboxAreas.some((area) => area in tech.techAreas))
    ));

    return filteredCards;
  };

  // const filterByBigCourse = () => {
  //   console.log('a');
  // };

  useEffect(() => {
    applyFilters();
  }, [checkboxes]);

  const applyFilters = () => {
    const filteredCourses = filterBySkill(filterByArea(allCourses));
    setFilteredCourses(filteredCourses);
  };

  return (
    <div id='search' className='flex items-center bg-[#fbfbfb] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-9 rounded-full p-0.5 shadow-md hover:shadow-lg'>
      <button className='flex justify-center items-center w-7 h-7 left-1 pr-0.5 rounded-full absolute bg-[#d9d9d9] hover:bg-[#eaeced] active:bg-[#d9d9d9]'
        onClick={() => applyFilters()}>
        <img className='w-3.5' src="src/assets/icons/searchIcon.svg" alt='Search technology'></img>
      </button>
      <input type="text" className='text-sm pl-8 bg-[#d9d9d9] rounded-l-full border-y-2 border-l-2 border-[#c3b8b8] w-full h-8 focus:border-r-2 focus:border-[#D5685A] outline-none'
        placeholder="Search Technology"
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filterBox && (
          <div className='absolute flex flex-col items-center justify-between w-40 h-32 right-0 bottom-11 rounded-xl bg-[#d9d9d9] border boder- border-[#c3b8b8]'>
            {checkboxes.map(({id, value, label, isChecked}) => (
              <label key={id} htmlFor={`checkbox-${id}`}>
                <input
                  type="checkbox"
                  value={value}
                  id={`checkbox-${id}`}
                  checked={isChecked}
                  onChange={() => {
                    handleCheckboxChange(id);
                    applyFilters();
                  }}
                />
                {label}
              </label>
            ))}
          </div>
        )}
        <button className='rounded-r-full border-y-2 border-r-2 h-8 px-2 border-[#c3b8b8] bg-[#d9d9d9] hover:bg-[#eaeced] active:bg-[#d9d9d9]'
          onClick={() => setFilterBox(!filterBox)}>
          <img src="src/assets/icons/filterIcon.svg" className='w-4.5 rounded-r-full mr-1.5' alt='Filter technology'></img>
        </button>
      </div>
    </div>
  );
};
