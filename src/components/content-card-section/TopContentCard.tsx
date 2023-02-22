import { CARD_SIZE } from '../shared/Card';
import { SliderFiveColumns } from '../shared/SliderFiveColumns';
import { ProjectArea } from './particular/ProjectArea';

export const TopContentCard: React.FC = () => {
  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner bg-[#D5685A]'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none -mb-5'>Projects</h2>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <ProjectArea/>
        {/* <div id='project-content' className='w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar grid grid-rows-4 grid-flow-col items-center justify-start overflow-x-auto scroll-smooth h-[16rem]'>
          { backendSkills.map((name) => (
            <SkillCard key={name} type={'backend'} name={name}/>
          )) }
        </div> */}
      </SliderFiveColumns>
    </div>
  );
};
