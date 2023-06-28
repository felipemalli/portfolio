import { createContext, useCallback, useContext, useState } from 'react';
import { ICard, IChildrenProps } from '../interfaces';

interface IProjectContextData {
  allProjects: ICard[]
  setAllProjects: (allProjects: ICard[]) => void

  filteredProjects: ICard[] | []
  setFilteredProjects: (filteredProjects: ICard[]) => void
}

const ProjectContext = createContext({} as IProjectContextData);

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider: React.FC<IChildrenProps> = ({ children }: IChildrenProps) => {
  const [allProjects, setAllProjects] = useState<ICard[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ICard[]>([]);

  const handleAllProjects = useCallback((allProjects: ICard[]) => {
    setAllProjects(allProjects);
  }, []);

  const handleFilteredProjects = useCallback((filteredProjects: ICard[]) => {
    setFilteredProjects(filteredProjects);
  }, []);


  return (
    <ProjectContext.Provider 
      value={ 
        {
          allProjects, 
          setAllProjects: handleAllProjects,

          filteredProjects,
          setFilteredProjects: handleFilteredProjects,
        } 
      }
    >
      { children } 
    </ProjectContext.Provider>
  );
};