import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { projects } from '../../../data/projects';
import { Card } from '../../shared/Card';

export const ProjectArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();

  return (
    <div className={`${areaName !== 'knowledge' && 'hidden'} w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {projects.map((project) => (
        <Card key={project.name} card={project} type={'project'}></Card>
      ))}
    </div>
  );
};
