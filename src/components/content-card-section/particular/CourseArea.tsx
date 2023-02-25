import { useEffect } from 'react';
import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { useCourseContext } from '../../../contexts/courseContext';
import { courses } from '../../../data/courses';
import { ICard } from '../../../interfaces';
import { Card } from '../../shared/Card';

export const CourseArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();
  const { setAllCourses, filteredCourses, setFilteredCourses } = useCourseContext();

  useEffect(() => {
    setFilteredCourses(courses);
    setAllCourses(courses);
  }, [setAllCourses, setFilteredCourses]);

  return (
    <div className={`${areaName !== 'knowledge' && 'hidden'} w-[242px] md:w-[484px] lg:w-[726px] xl:w-[968px] 2xl:w-[1210px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {filteredCourses.map((course: ICard) => (
        <Card key={course.name} card={course}></Card>
      ))}
    </div>
  );
};
