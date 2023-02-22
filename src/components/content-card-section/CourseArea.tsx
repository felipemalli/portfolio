import { useState } from 'react';
import { backendSkills } from '../../data/skills';
import { CARD_SIZE } from '../shared/Card';
import { SkillCard } from '../shared/SkillCard';
import { SliderFiveColumns } from '../shared/SliderFiveColumns';

const data = [
  { image: 'src/assets/courses/aws-geekuniversity.jpg', name: 'aws 1'},
  { image: 'src/assets/courses/aws-geekuniversity.jpg', name: 'aws 2'},
  { image: 'src/assets/courses/microservices-stephengrinder.jpg', name: 'microservices 1'},
  { image: 'src/assets/courses/microservices-stephengrinder.jpg', name: 'microservices 2'},
  { image: 'src/assets/courses/profigma-lucasmarte.jpg', name: 'profigma 1'},
  { image: 'src/assets/courses/profigma-lucasmarte.jpg', name: 'profigma 2'},
  { image: 'src/assets/courses/tailwind-bradtraversy.jpg', name: 'tailwind 1'},
  { image: 'src/assets/courses/tailwind-bradtraversy.jpg', name: 'tailwind 2'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 1'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 2'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 3'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 4'},
  { image: 'src/assets/courses/aws-geekuniversity.jpg', name: 'aws 4'},
  { image: 'src/assets/courses/aws-geekuniversity.jpg', name: 'aws 6'},
  { image: 'src/assets/courses/microservices-stephengrinder.jpg', name: 'microservices 7'},
  { image: 'src/assets/courses/microservices-stephengrinder.jpg', name: 'microservices 8'},
  { image: 'src/assets/courses/profigma-lucasmarte.jpg', name: 'profigma 8'},
  { image: 'src/assets/courses/profigma-lucasmarte.jpg', name: 'profigma 9'},
  { image: 'src/assets/courses/tailwind-bradtraversy.jpg', name: 'tailwind 6'},
  { image: 'src/assets/courses/tailwind-bradtraversy.jpg', name: 'tailwind 5'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 8'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 9'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 0'},
  { image: 'src/assets/courses/webdevelopment-trybe.png', name: 'webdevelopment 5'},
];

console.log(data);

export const CourseArea: React.FC = () => {
  const [hideCard, setHideCard] = useState(false);
  console.log(setHideCard);

  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-b-[5rem] border border-[#737E86] bg-[#fbfbfb] pt-1'>
      <SliderFiveColumns CARD_SIZE={CARD_SIZE}>
        <div className={`${hideCard && 'hidden'} w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar grid grid-rows-4 grid-flow-col items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
          { backendSkills.map((name) => (
            <SkillCard key={name} type={'backend'} name={name}/>
          )) }
        </div>
        {/* <div id='course-content' className={`${hideCard && 'hidden'} w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
          {data.map((d) => (
            <Card key={d.name} type={'course'} name={d.name} image={d.image}></Card>
          ))}
        </div> */}
      </SliderFiveColumns>
      <h2 className='text-4xl font-bold text-[#220909] select-none -mt-2'>Courses</h2>



      {/* <Carousel cardDataList={data[index]}></Carousel> */}
    </div>
  );
};
