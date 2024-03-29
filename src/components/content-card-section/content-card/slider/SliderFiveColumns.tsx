import { useCallback, useEffect, useRef, useState } from 'react';
import { useCourseContext, useMediaQueryContext, useProjectContext } from '../../../../contexts';
import { useChangeAreaContext } from '../../../../contexts/ChangeAreaContext';
import { IChildrenProps } from '../../../../interfaces';

interface ISliderProps extends IChildrenProps {
  CARD_SIZE: number
}

const TIME_TO_CARD_SCROLL = 320; // time to not break scroll movement

export const SliderFiveColumns: React.FC<ISliderProps> = ({ children, CARD_SIZE }: ISliderProps ) => {
  const [buttonClickable, setButtonClickable] = useState(true);
  const [rightArrowClickable, setRightArrowClickable] = useState(true);
  const [leftArrowClickable, setLeftArrowClickable] = useState(false);
  
  const { isLg, isMd, isXl, is2xl } = useMediaQueryContext();
  const cardsOnScreenQuantity: number = is2xl ? 5 : isXl ? 4 : isLg ? 3 : isMd ? 2 : 1;
  const cardsScrollMultiplier: number = is2xl? 2.2 : isMd ? 2 : 1;
  
  const [slider, setSlider] = useState<Element | null>(null);
  const sliderDivRef = useRef<HTMLInputElement | null>(null);

  const { areaName } = useChangeAreaContext();
  const { filteredProjects } = useProjectContext();
  const { filteredCourses } = useCourseContext();

  type Timeout = ReturnType<typeof setTimeout>
  const [timeoutId, setTimeoutId] = useState<Timeout | null>(null);
  
  useEffect(() => {
    checkEndOfScroll();
  }, [slider, cardsOnScreenQuantity, filteredProjects, filteredCourses]);

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
    if (slider && ((slider?.scrollLeft % CARD_SIZE) > 1)) {
      slider.scrollLeft = (findClosestMultiple(slider.scrollLeft, CARD_SIZE));
    }
  };

  useEffect(() => {
    fixPositionOfScroll();
  }, [slider]);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const [checkActualSlider, setCheckActualSlider] = useState(false);

  useEffect(() => {
    checkEndOfScroll();
  }, [checkActualSlider]);

  const handleClick = async (scroll: () => void) => {
    if (buttonClickable) {
      setButtonClickable(false);
      scroll();
      await new Promise<void>((resolve) => {
        const newTimeoutId = setTimeout(() => {
          setButtonClickable(true);
          resolve();
        }, TIME_TO_CARD_SCROLL * cardsScrollMultiplier);
        setTimeoutId(newTimeoutId);
      });
      setCheckActualSlider(!checkActualSlider); // ensures checkEndOfScroll() will run with correct slider (user can change the slider while handleClick is in setTimeOut)
    }
  };

  const checkEndOfScroll = () => {
    const MARGIN_ERROR = CARD_SIZE / 2;
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
      const scrollQuantity = CARD_SIZE * cardsOnScreenQuantity;
      const scrollFixed = findClosestMultiple((slider.scrollLeft - scrollQuantity), CARD_SIZE);
      slider.scrollLeft = scrollFixed;
    }
  };

  const scrollRight = () => {
    if (buttonClickable && slider) {
      const scrollQuantity = CARD_SIZE * cardsOnScreenQuantity;
      const scrollFixed = findClosestMultiple((slider.scrollLeft + scrollQuantity), CARD_SIZE);
      slider.scrollLeft = scrollFixed;
    }
  };

  const [sliderClicked, setSliderClicked] = useState<boolean>(false);
  
  const handleSliderClick = useCallback(() => {
    setSliderClicked(true);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (sliderDivRef.current && sliderDivRef.current !== event.target && !sliderDivRef.current.contains(event.target as Node)) {
      setSliderClicked(false);
    }
  }, []);
  
  const verifyArrow = useCallback((event: KeyboardEvent) => {
    if (sliderClicked && ['ArrowLeft', 'ArrowRight'].includes(event.code)) {
      event.preventDefault();
      checkEndOfScroll();
    }
  }, [checkEndOfScroll, sliderClicked]);
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', verifyArrow);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', verifyArrow);
    };
  }, [handleClickOutside, verifyArrow]);

  return (
    <div className={'flex justify-center items-center gap-[4px] sm:gap-[12px]'}>
      <button className={`rounded-full h-11 pl-3.5 pr-3 rotate-180 ${leftArrowClickable ? 'hover:opacity-75' : 'opacity-30 cursor-not-allowed'} transition-colors duration-200`}
        onClick={() => leftArrowClickable && handleClick(scrollLeft)}
      >
        <img src='/assets/icons/doubleArrow.svg' className='w-4.5' alt='Previous slider button'></img>
      </button>
      <div ref={sliderDivRef} onClick={() => handleSliderClick()}>
        {children}
      </div>
      <button className={`rounded-full h-11 pl-3.5 pr-3 ${rightArrowClickable ? 'hover:opacity-75' : 'opacity-30 cursor-not-allowed'} transition-colors duration-200`}
        onClick={() => rightArrowClickable && handleClick(scrollRight)}
      >
        <img src='/assets/icons/doubleArrow.svg' className='w-4.5' alt='Next slider button'></img>
      </button>
    </div>
  );
};
