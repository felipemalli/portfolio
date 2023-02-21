import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IChildrenProps } from '../../interfaces';
import { breakpoints } from '../../utils/breakpoints';

interface SliderProps extends IChildrenProps {
  CARD_SIZE: number,
  id: string,
}

const TIME_TO_CARD_SCROLL = 300; // time to not break scroll movement

export const SliderFiveColumns: React.FC<SliderProps> = ({ children, CARD_SIZE, id }: SliderProps ) => {
  const [buttonClickable, setButtonClickable] = useState(true);
  const [rightArrowClickable, setRightArrowClickable] = useState(true);
  const [leftArrowClickable, setLeftArrowClickable] = useState(false);

  const isMd = useMediaQuery(breakpoints.isMd);
  const isLg = useMediaQuery(breakpoints.isLg);
  const isXl = useMediaQuery(breakpoints.isXl);
  const is2Xl = useMediaQuery(breakpoints.is2xl);
  const cardsOnScreenQuantity: number = is2Xl ? 5 : isXl ? 4 : isLg ? 3 : isMd ? 2 : 1;
  const cardsScrollMultiplier: number = isMd ? 2 : 1;

  useEffect(() => {
    checkEndOfScroll();
  }, []);

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
    const element = document.getElementById(`${id}`);
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
      const slider = document.getElementById(`${id}`);
      if (slider) {
        slider.scrollLeft -= CARD_SIZE * cardsOnScreenQuantity;
      }
    }
  };
  const scrollRight = () => {
    if (buttonClickable) {
      const slider = document.getElementById(`${id}`);
      if (slider) {
        slider.scrollLeft += CARD_SIZE * cardsOnScreenQuantity;
      }
    }
  };

  return (
    <div className={'flex justify-center items-center gap-[0.938rem]'}>
      <button className={`rounded-full h-11 pl-3.5 pr-3 rotate-180 ${leftArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
        onClick={() => handleClick(scrollLeft)}
      >
        <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
      </button>
      <div id=''>
      </div>
      {children}
      <button className={`rounded-full h-11 pl-3.5 pr-3 ${rightArrowClickable ? 'hover:opacity-70' : 'opacity-30 cursor-not-allowed'}`}
        onClick={() => handleClick(scrollRight)}
      >
        <img src="src/assets/icons/doubleArrow.svg" className='w-4.5'></img>
      </button>
    </div>
  );
};
