import { createContext, useCallback, useContext, useState } from 'react';
import { IChildrenProps, ISkillCard } from '../interfaces';

interface ISkillContextData {
  allSkills: ISkillCard[];
  setAllSkills: (allSkills: ISkillCard[]) => void;

  filteredSkills: ISkillCard[] | []
  setFilteredSkills: (filteredSkills: ISkillCard[]) => void;
}

const SkillContext = createContext({} as ISkillContextData);

export const useSkillContext = () => {
  return useContext(SkillContext);
};

export const SkillProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [allSkills, setAllSkills] = useState<ISkillCard[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<ISkillCard[]>([]);

  const handleAllSkills = useCallback((allSkills: ISkillCard[]) => {
    setAllSkills(allSkills);
  }, []);

  const handleFilteredSkills = useCallback((filteredSkills: ISkillCard[]) => {
    setFilteredSkills(filteredSkills);
  }, []);


  return (
    <SkillContext.Provider 
      value={ 
        {
          allSkills, 
          setAllSkills: handleAllSkills,

          filteredSkills,
          setFilteredSkills: handleFilteredSkills,
        } 
      }
    >
      { children } 
    </SkillContext.Provider>
  );
};