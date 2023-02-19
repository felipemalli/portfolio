import { useState } from "react"
import { Card } from "./Card"

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
]

export default function ProjectArea() {
  const [index, setIndex] = useState(0)

  return (
    <div className='flex flex-col justify-evenly items-center bg-[#D5685A] h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none'>Principal Projects</h2>
      <div className={`flex justify-center items-center gap-[0.938rem]`}>

        {/* {data.map((e: { image: string, name: string }) => <Card key={e.name} type={'project'} name={e.name} image={e.image}></Card>)} */}

        <button className='rounded-r-full border-y-2 border-r-2 h-8 px-2 border-[#c3b8b8] bg-[#d9d9d9] hover:bg-[#eaeced]'>
          <img src="src/assets/icons/filterIcon.svg" className='w-4.5 rounded-r-full mr-1.5'></img>
        </button>
        <div className="">
          <Card key={data[index].name} type={'project'} name={data[index].name} image={data[index].image}></Card>
        </div>
        <div className="hidden sm:flex">
          <Card key={data[index + 1].name} type={'project'} name={data[index + 1].name} image={data[index + 1].image}></Card>
        </div>
        <div className="hidden lg:flex">
          <Card key={data[index + 2].name} type={'project'} name={data[index + 2].name} image={data[index + 2].image}></Card>
        </div>
        <div className="hidden xl:flex">
          <Card key={data[index + 3].name} type={'project'} name={data[index + 3].name} image={data[index + 3].image}></Card>
        </div>
        <div className="hidden 2xl:flex">
          <Card key={data[index + 4].name} type={'project'} name={data[index + 4].name} image={data[index + 4].image}></Card>
        </div>
        <button className='rounded-r-full border-y-2 border-r-2 h-8 px-2 border-[#c3b8b8] bg-[#d9d9d9] hover:bg-[#eaeced]'>
          <img src="src/assets/icons/filterIcon.svg" className='w-4.5 rounded-r-full mr-1.5'></img>
        </button>
      </div>



      {/* <Carousel cardDataList={data[index]}></Carousel> */}
    </div>
  )
}
