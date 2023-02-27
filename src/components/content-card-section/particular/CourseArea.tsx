import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useChangeAreaContext } from '../../../contexts/ChangeAreaContext';
import { useCourseContext } from '../../../contexts/CourseContext';
import { courses } from '../../../data/courses';
import { ICard } from '../../../interfaces';
import { menuVariants } from '../../../utils/motionVariants';
import { Card } from '../../shared/Card/Card';

export const CourseArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setAllCourses, filteredCourses, setFilteredCourses } = useCourseContext();

  useEffect(() => {
    setFilteredCourses(courses);
    setAllCourses(courses);
  }, []);

  return (
    <motion.div animate={areaName === 'knowledge' ? 'open' : 'closed'} variants={menuVariants} className={`${areaName !== 'knowledge' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {filteredCourses.map((course: ICard) => (
        <Card key={course.name} card={course}/>
      ))}
      {filteredCourses.length === 0 && <h3 className='break-normal absolute left-1/2 -translate-x-1/2 font-semibold text-base sm:text-2xl opacity-50'>Courses not found 😭</h3>}
    </motion.div>
  );
};
