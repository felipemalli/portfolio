import { createContext, useCallback, useContext, useState } from 'react';
import { ICard, IChildrenProps } from '../interfaces';

interface ICourseContextData {
  allCourses: ICard[];
  setAllCourses: (allCourses: ICard[]) => void;

  filteredCourses: ICard[] | []
  setFilteredCourses: (filteredCourses: ICard[]) => void;
}

const CourseContext = createContext({} as ICourseContextData);

export const useCourseContext = () => {
  return useContext(CourseContext);
};

export const CourseProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [allCourses, setAllCourses] = useState<ICard[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<ICard[]>([]);

  const handleAllCourses = useCallback((allCourses: ICard[]) => {
    setAllCourses(allCourses);
  }, []);

  const handleFilteredCourses = useCallback((filteredCourses: ICard[]) => {
    setFilteredCourses(filteredCourses);
  }, []);


  return (
    <CourseContext.Provider 
      value={ 
        {
          allCourses, 
          setAllCourses: handleAllCourses,

          filteredCourses,
          setFilteredCourses: handleFilteredCourses,
        } 
      }
    >
      { children } 
    </CourseContext.Provider>
  );
};