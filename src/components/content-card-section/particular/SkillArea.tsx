import { motion } from 'framer-motion';
import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { menuVariants } from '../../../utils/motionVariants';
import { SkillCard } from '../../shared/SkillCard';

interface ISkillAreaProps {
  skills: string[]
}

export const SkillArea: React.FC<ISkillAreaProps> = ({ skills }: ISkillAreaProps) => {
  const { areaName } = useChangeAreaContext();

  return (
    <motion.div animate={areaName === 'skills' ? 'open' : 'closed'} variants={menuVariants} id='project-content' className={`${areaName !== 'skills' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar grid grid-rows-4 grid-flow-col items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      { skills.map((name) => (
        <SkillCard key={name} type={'backend'} name={name}/>
      )) }
    </motion.div>
  );
};
