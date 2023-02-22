import { useChangeAreaContext } from '../../../contexts/changeAreaContext';
import { Card } from '../../shared/Card';

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

export const ProjectArea: React.FC = () => {
  const { areaName } = useChangeAreaContext();

  return (
    <div className={`${areaName != 'knowledge' && 'hidden'} w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]`}>
      {data.map((d) => (
        <Card key={d.name} type={'project'} name={d.name} image={d.image}></Card>
      ))}
    </div>
  );
};
