import { useEffect } from 'react';
import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { useProjectContext } from '../../../contexts/projectContext';
import { projects } from '../../../data/projects';
import { ICard } from '../../../interfaces';
import { Card } from '../../shared/Card';

export const ProjectArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setAllProjects, filteredProjects, setFilteredProjects } = useProjectContext();

  useEffect(() => {
    setAllProjects(projects);
    setFilteredProjects(projects);
  }, []);
  
  return (
    <div className={`${areaName !== 'knowledge' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {filteredProjects && filteredProjects.map((project: ICard) => (
        <Card key={project.name} card={project}></Card>
      ))}
    </div>
  );
};
