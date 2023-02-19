import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../utils/breakpoints';
import { Card } from "./Card";

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

  const isMd = useMediaQuery(breakpoints.isMd)
  const isLg = useMediaQuery(breakpoints.isLg)
  const isXl = useMediaQuery(breakpoints.isXl)
  const is2Xl = useMediaQuery(breakpoints.is2xl)
  if (isMd && !data[index + 1]) setIndex(index - 1)
  if (isLg && !data[index + 2]) setIndex(index - 1)
  if (isXl && !data[index + 3]) setIndex(index - 1)
  if (is2Xl && !data[index + 4]) setIndex(index - 1)

  const cardQuantityOnScreen = (): number => {
    switch (true) {
      case is2Xl: return 5
      case isXl: return 4
      case isLg: return 3
      case isMd: return 2
      default: return 1
    }
  }

  const existNextCard = (index + cardQuantityOnScreen() != data.length)
  const existPreviousCard = (index != 0)

  return (
    <div className='flex flex-col justify-evenly items-center bg-[#D5685A] h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none'>Projects</h2>
      <div className={`flex justify-center items-center gap-[0.938rem]`}>

        {/* {data.map((e: { image: string, name: string }) => <Card key={e.name} type={'project'} name={e.name} image={e.image}></Card>)} */}

        <button className={`rounded-full h-11 pl-3.5 pr-3 rotate-180 ${existPreviousCard ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
          onClick={() => existPreviousCard && setIndex(index - 1)}
        >
          <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
        </button>
          <Card cardKey={data[index].name} type={'project'} name={data[index].name} image={data[index].image}></Card>
          {isMd && !!data[index + 1] && <Card cardKey={data[index + 1].name} type={'project'} name={data[index + 1].name} image={data[index + 1].image}></Card>}
          {isLg && !!data[index + 2] && <Card cardKey={data[index + 2].name} type={'project'} name={data[index + 2].name} image={data[index + 2].image}></Card>}
          {isXl && !!data[index + 3] && <Card cardKey={data[index + 3].name} type={'project'} name={data[index + 3].name} image={data[index + 3].image}></Card>}
          {is2Xl && !!data[index + 4] && <Card cardKey={data[index + 4].name} type={'project'} name={data[index + 4].name} image={data[index + 4].image}></Card>}
        <button className={`rounded-full h-11 pl-3.5 pr-3 ${existNextCard ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
          onClick={() => existNextCard && setIndex(index + 1)}
          >
          <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
        </button>
      </div>



      {/* <Carousel cardDataList={data[index]}></Carousel> */}
    </div>
  )
}
