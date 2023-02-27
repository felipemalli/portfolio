import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useChangeAreaContext } from '../../../contexts/ChangeAreaContext';
import { useProjectContext } from '../../../contexts/ProjectContext';
import { projects } from '../../../data/projects';
import { ICard } from '../../../interfaces';
import { menuVariants } from '../../../utils/motionVariants';
import { Card } from '../../shared/Card';

export const ProjectArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setAllProjects, filteredProjects, setFilteredProjects } = useProjectContext();

  useEffect(() => {
    setFilteredProjects(projects);
    setAllProjects(projects);
  }, [setAllProjects, setFilteredProjects]);

  return (
    <motion.div animate={areaName === 'knowledge' ? 'open' : 'closed'} variants={menuVariants} className={`${areaName !== 'knowledge' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {filteredProjects.map((project: ICard) => (
        <Card key={project.name} card={project}></Card>
      ))}
      {filteredProjects.length === 0 && <h3 className='break-normal absolute left-1/2 -translate-x-1/2 font-semibold text-base sm:text-2xl opacity-50'>Projects not found 😭</h3>}
    </motion.div>
  );
};
