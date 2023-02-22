import { CARD_SIZE } from '../shared/Card';
import { SliderFiveColumns } from '../shared/SliderFiveColumns';
import { CourseArea } from './particular/CourseArea';

export const BottonContentCard: React.FC = () => {
  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-b-[5rem] border border-[#737E86] bg-[#fbfbfb] pt-1'>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <CourseArea />
      </SliderFiveColumns>
      <h2 className='text-4xl font-bold text-[#220909] select-none -mt-2'>Courses</h2>
    </div>
  );
};
