import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../../utils/breakpoints';
import { Card } from "../../shared/Card";

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
]

const CARD_SIZE = 239 // to scroll the perfect amount and not break a card
const TIME_TO_CARD_SWAP = 225 // time to not break scroll movement

export default function ProjectArea() {
  const [index, setIndex] = useState(0)
  const [buttonClickable, setButtonClickable] = useState(true);
  const [rightArrowClickable, setRightArrowClickable] = useState(true);
  const [leftArrowClickable, setLeftArrowClickable] = useState(false);

  const isMd = useMediaQuery(breakpoints.isMd)
  const isLg = useMediaQuery(breakpoints.isLg)
  const isXl = useMediaQuery(breakpoints.isXl)
  const is2Xl = useMediaQuery(breakpoints.is2xl)
  const cardsOnScreenQuantity: number = is2Xl ? 5 : isXl ? 4 : isLg ? 3 : isMd ? 2 : 1

  const handleClick = async (scroll: () => void) => {
    if (buttonClickable) {
      setButtonClickable(false);
      scroll()
      await new Promise<void>((resolve, _reject) => {
        setTimeout(() => {
          setButtonClickable(true);
          resolve();
        }, TIME_TO_CARD_SWAP * cardsOnScreenQuantity);
      })
      checkEndOfScroll()
    }
  };

  function checkEndOfScroll() {
    const MARGIN_ERROR = 3;
    const element = document.getElementById("project-content");
    if (element!.scrollWidth - element!.scrollLeft < element!.clientWidth + MARGIN_ERROR) {
      setRightArrowClickable(false);
    } else if (!rightArrowClickable) {
      setRightArrowClickable(true);
    }
    if (element!.scrollLeft < MARGIN_ERROR) {
      setLeftArrowClickable(false);
    } else if (!leftArrowClickable) {
      setLeftArrowClickable(true);
    }
  }

  const scrollLeft = () => {
    if (buttonClickable) {
      document.getElementById("project-content")!.scrollLeft -= CARD_SIZE * cardsOnScreenQuantity;
    }
  }
  const scrollRight = () => {
    if (buttonClickable) {
      document.getElementById("project-content")!.scrollLeft += CARD_SIZE * cardsOnScreenQuantity;
    }
  }

  return (
    <div className='flex flex-col justify-evenly items-center bg-[#D5685A] h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none'>Projects</h2>
      <div className={`flex justify-center items-center gap-[0.938rem]`}>

        <button className={`rounded-full h-11 pl-3.5 pr-3 rotate-180 ${leftArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
          onClick={() => handleClick(scrollLeft)}
        >
          <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
        </button>
        
        <div id='project-content' className="w-[15rem] md:w-[30rem] lg:w-[45rem] xl:w-[60rem] 2xl:w-[75rem]
        hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[15rem]">
          {data.map((d) => (
            <Card cardKey={d.name} type={'project'} name={d.name} image={d.image}></Card>
          ))}
        </div>

        <button className={`rounded-full h-11 pl-3.5 pr-3 ${rightArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
          onClick={() => handleClick(scrollRight)}
          >
          <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
        </button>
      </div>



      {/* <Carousel cardDataList={data[index]}></Carousel> */}
    </div>
  )
}
