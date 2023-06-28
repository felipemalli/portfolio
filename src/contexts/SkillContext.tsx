import { createContext, useCallback, useContext, useState } from 'react';
import { IChildrenProps } from '../interfaces';

interface ISkillContextData {
  allBottonSkills: string[]
  setAllBottonSkills: (allBottonSkills: string[]) => void

  filteredBottonSkills: string[] | []
  setFilteredBottonSkills: (filteredBottonSkills: string[]) => void

  allTopSkills: string[]
  setAllTopSkills: (allBottonSkills: string[]) => void

  filteredTopSkills: string[] | []
  setFilteredTopSkills: (filteredTopSkills: string[]) => void
}

const SkillContext = createContext({} as ISkillContextData);

export const useSkillContext = () => {
  return useContext(SkillContext);
};

export const SkillProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [allBottonSkills, setAllBottonSkills] = useState<string[]>([]);
  const [filteredBottonSkills, setFilteredBottonSkills] = useState<string[]>([]);
  const [allTopSkills, setAllTopSkills] = useState<string[]>([]);
  const [filteredTopSkills, setFilteredTopSkills] = useState<string[]>([]);

  const handleAllBottonSkills = useCallback((allBottonSkills: string[]) => {
    setAllBottonSkills(allBottonSkills);
  }, []);

  const handleFilteredBottonSkills = useCallback((filteredBottonSkills: string[]) => {
    setFilteredBottonSkills(filteredBottonSkills);
  }, []);

  const handleAllTopSkills = useCallback((allTopSkills: string[]) => {
    setAllTopSkills(allTopSkills);
  }, []);

  const handleFilteredTopSkills = useCallback((filteredTopSkills: string[]) => {
    setFilteredTopSkills(filteredTopSkills);
  }, []);


  return (
    <SkillContext.Provider 
      value={ 
        {
          allBottonSkills, 
          setAllBottonSkills: handleAllBottonSkills,

          filteredBottonSkills,
          setFilteredBottonSkills: handleFilteredBottonSkills,

          allTopSkills,
          setAllTopSkills: handleAllTopSkills,

          filteredTopSkills,
          setFilteredTopSkills: handleFilteredTopSkills,
        } 
      }
    >
      { children } 
    </SkillContext.Provider>
  );
};