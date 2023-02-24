import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { projects } from '../../../data/projects';
import { Card } from '../../shared/Card';

export const ProjectArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();

  return (
    <div className={`${areaName !== 'knowledge' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {projects.map((project) => (
        <Card key={project.name} card={project} type={'project'}></Card>
      ))}
    </div>
  );
};
