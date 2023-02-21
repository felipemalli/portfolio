import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../utils/breakpoints';
import { Card, CARD_SIZE } from '../shared/Card';

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

const TIME_TO_CARD_SCROLL = 300; // time to not break scroll movement

export const ProjectArea: React.FC = () => {
  const [buttonClickable, setButtonClickable] = useState(true);
  const [rightArrowClickable, setRightArrowClickable] = useState(true);
  const [leftArrowClickable, setLeftArrowClickable] = useState(false);

  const isMd = useMediaQuery(breakpoints.isMd);
  const isLg = useMediaQuery(breakpoints.isLg);
  const isXl = useMediaQuery(breakpoints.isXl);
  const is2Xl = useMediaQuery(breakpoints.is2xl);
  const cardsOnScreenQuantity: number = is2Xl ? 5 : isXl ? 4 : isLg ? 3 : isMd ? 2 : 1;
  const cardsScrollMultiplier: number = isMd ? 2 : 1;

  const handleClick = async (scroll: () => void) => {
    if (buttonClickable) {
      setButtonClickable(false);
      scroll();
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setButtonClickable(true);
          resolve();
        }, TIME_TO_CARD_SCROLL * cardsScrollMultiplier);
      });
      checkEndOfScroll();
    }
  };

  function checkEndOfScroll() {
    const MARGIN_ERROR = 3;
    const element = document.getElementById('project-content');
    if (element) {
      if (element?.scrollWidth - element?.scrollLeft < element?.clientWidth + MARGIN_ERROR) {
        setRightArrowClickable(false);
      } else if (!rightArrowClickable) {
        setRightArrowClickable(true);
      }
      if (element?.scrollLeft < MARGIN_ERROR) {
        setLeftArrowClickable(false);
      } else if (!leftArrowClickable) {
        setLeftArrowClickable(true);
      }
    }
  }

  const scrollLeft = () => {
    if (buttonClickable) {
      const slider = document.getElementById('project-content');
      if (slider) {
        slider.scrollLeft -= CARD_SIZE * cardsOnScreenQuantity;
      }
    }
  };
  const scrollRight = () => {
    if (buttonClickable) {
      const slider = document.getElementById('project-content');
      if (slider) {
        slider.scrollLeft += CARD_SIZE * cardsOnScreenQuantity;
      }
    }
  };

  return (
    <div className='flex flex-col justify-evenly items-center h-[26rem] m-auto md:rounded-t-[5rem] shadow-inner bg-[#D5685A]'>
      <h2 className='text-4xl font-bold text-[#f9f9f9] select-none -mb-5'>Projects</h2>
      <div className={'flex justify-center items-center gap-[0.938rem]'}>

        <button className={`rounded-full h-11 pl-3.5 pr-3 rotate-180 ${leftArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
          onClick={() => handleClick(scrollLeft)}
        >
          <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
        </button>
        
        <div id='project-content' className={'w-[240px] md:w-[480px] lg:w-[720px] xl:w-[960px] 2xl:w-[1200px] hide-horizontal-scrollbar flex items-center justify-start overflow-x-auto scroll-smooth h-[16rem]'}>
          {data.map((d) => (
            <Card key={d.name} type={'project'} name={d.name} image={d.image}></Card>
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
  );
};
