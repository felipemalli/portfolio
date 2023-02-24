import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useChangeAreaContext } from '../../contexts/changeAreaContext';
import { IChildrenProps } from '../../interfaces';
import { breakpoints } from '../../utils/breakpoints';

interface ISliderProps extends IChildrenProps {
  CARD_SIZE: number
}

const TIME_TO_CARD_SCROLL = 300; // time to not break scroll movement

export const SliderFiveColumns: React.FC<ISliderProps> = ({ children, CARD_SIZE }: ISliderProps ) => {
  const [buttonClickable, setButtonClickable] = useState(true);
  const [rightArrowClickable, setRightArrowClickable] = useState(true);
  const [leftArrowClickable, setLeftArrowClickable] = useState(false);
  
  const isMd = useMediaQuery(breakpoints.isMd);
  const isLg = useMediaQuery(breakpoints.isLg);
  const isXl = useMediaQuery(breakpoints.isXl);
  const is2Xl = useMediaQuery(breakpoints.is2xl);
  const cardsOnScreenQuantity: number = is2Xl ? 5 : isXl ? 4 : isLg ? 3 : isMd ? 2 : 1;
  const cardsScrollMultiplier: number = is2Xl? 2.2 : isMd ? 2 : 1;
  
  const [slider, setSlider] = useState<Element | null>(null);
  const sliderDivRef = useRef(null);

  const { areaName } = useChangeAreaContext();
  
  useEffect(() => {
    checkEndOfScroll();
  }, [slider, cardsOnScreenQuantity]);

  useEffect(() => {
    if (sliderDivRef.current) {
      const sliderDivFather: HTMLDivElement = sliderDivRef.current;
      const sliderDivCollection: HTMLCollectionOf<Element> = sliderDivFather.children;
      if (sliderDivCollection){
        if (areaName === 'knowledge') {
          setSlider(sliderDivCollection[0]);
        }
        if (areaName === 'skills') {
          setSlider(sliderDivCollection[1]);
        }
      }
    }
  }, [sliderDivRef, areaName]);

  const findClosestMultiple = (inputNum: number, minMultiple: number) => {
    const multiple = Math.ceil(inputNum / minMultiple) * minMultiple;
    return multiple;
  };

  const fixPositionOfScroll = () => {
    if (slider && slider?.scrollLeft % CARD_SIZE !== 0) {
      slider.scrollLeft = (findClosestMultiple(slider.scrollLeft, CARD_SIZE));
    }
  };

  useEffect(() => {
    fixPositionOfScroll();
  }, [slider]);

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

  const checkEndOfScroll = () => {
    const MARGIN_ERROR = 3;
    if (slider) {
      if (slider?.scrollWidth - slider?.scrollLeft < slider?.clientWidth + MARGIN_ERROR) {
        setRightArrowClickable(false);
      } else if (!rightArrowClickable) {
        setRightArrowClickable(true);
      }
      if (slider?.scrollLeft < MARGIN_ERROR) {
        setLeftArrowClickable(false);
      } else if (!leftArrowClickable) {
        setLeftArrowClickable(true);
      }
    }
  };

  const scrollLeft = () => {
    if (buttonClickable && slider) {
      slider.scrollLeft -= CARD_SIZE * cardsOnScreenQuantity;
    }
    fixPositionOfScroll();
  };
  const scrollRight = () => {
    if (buttonClickable && slider) {
      slider.scrollLeft += CARD_SIZE * cardsOnScreenQuantity;
    }
    fixPositionOfScroll();
  };

  return (
    <div className={'flex justify-center items-center gap-[0.938rem]'}>
      <button className={`rounded-full h-11 pl-3.5 pr-3 rotate-180 ${leftArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
        onClick={() => handleClick(scrollLeft)}
      >
        <img src="src/assets/icons/doubleArrow.svg" className='w-4.5' alt='Previous slider button'></img>
      </button>
      <div ref={sliderDivRef}>
        {children}
      </div>
      <button className={`rounded-full h-11 pl-3.5 pr-3 ${rightArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
        onClick={() => handleClick(scrollRight)}
      >
        <img src="src/assets/icons/doubleArrow.svg" className='w-4.5' alt='Next slider button'></img>
      </button>
    </div>
  );
};
