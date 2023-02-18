import { Slider } from './Slider'

const data = [
  { image: 'src/courses/aws-geekuniversity.jpg', name: 'aws 1'},
  { image: 'src/courses/aws-geekuniversity.jpg', name: 'aws 2'},
  { image: 'src/courses/microservices-stephengrinder.jpg', name: 'microservices 1'},
  { image: 'src/courses/microservices-stephengrinder.jpg', name: 'microservices 2'},
  { image: 'src/courses/profigma-lucasmarte.jpg', name: 'profigma 1'},
  { image: 'src/courses/profigma-lucasmarte.jpg', name: 'profigma 2'},
  { image: 'src/courses/tailwind-bradtraversy.jpg', name: 'tailwind 1'},
  { image: 'src/courses/tailwind-bradtraversy.jpg', name: 'tailwind 2'},
  { image: 'src/courses/webdevelopment-trybe.png', name: 'webdevelopment 1'},
  { image: 'src/courses/webdevelopment-trybe.png', name: 'webdevelopment 2'},
]

export default function ProjectArea() {

  return (
    <div className='flex flex-col justify-evenly items-center bg-[#D5685A] h-[26rem] m-auto rounded-t-[5rem] shadow-inner'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none'>Principal Projects</h2>
      <Slider cardDataList={data}></Slider>
    </div>
  )
}
