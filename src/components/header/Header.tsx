import { useEffect, useRef, useState } from 'react';
import { useLanguageContext, useMediaQueryContext } from '../../contexts';
import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';
import { LanguageButton } from './particular/LanguageButton';

export const Header: React.FC = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const [isRenderLanguage, setIsRenderLanguage] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navButton = useRef<HTMLButtonElement | null>(null);

  const { isMd, isXl } = useMediaQueryContext();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (navButton.current && navButton.current !== event.target && !navButton.current.contains(event.target as Node) && navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpenNav(false);
    }
  };
  
  const { translations } = useLanguageContext();


  return (
    <header id='header'>
      <div className='w-fill md:mx-8 lg:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <div className='flex justify-between md:justify-center -mb-[88px] xl:justify-start p-6 md:my-4 xl:ml-20 2xl:ml-12'>
          <img className='flex h-6 w-6 scale-75 xl:-ml-28 2xl:-ml-16 mr-10 2xl:mr-16 mt-2'  src='./assets/background/icon.png' alt='Felipevm icon'/>
          <div>
            <div className={`${!isOpenNav ? 'hidden' : 'absolute'} w-screen md:w-auto md:flex md:relative right-1/2 translate-x-1/2 mt-12 md:mt-0 border-y md:border-none`}>
              <nav ref={navRef} className={'flex flex-col md:flex-row items-center text-center py-4 md:py-0 space-y-2 md:space-y-0 md:space-x-8 2xl:space-x-10 uppercase text-customBlue-500 tracking-widest font-semibold bg-secondary-900 md:bg-transparent'} onClick={() => setIsOpenNav(false)}>
                <NavOptionNavigation className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' componentId='content' areaNameNav='knowledge'>{translations.nav_knowledge}</NavOptionNavigation>
                <NavOptionNavigation className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' componentId='content' areaNameNav='skills'>{translations.nav_skills}</NavOptionNavigation>
                <NavOptionNavigation className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' componentId='about'>{translations.nav_about}</NavOptionNavigation>
                <NavOptionLink className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>{translations.nav_contact}</NavOptionLink>
                {isMd && !isXl && <LanguageButton className='relative flex-col items-center gap-1 pb-0.5' />}
              </nav>
            </div>
            <div className='flex gap-4'>
              {!isMd && isRenderLanguage && <LanguageButton className='relative flex-col items-center gap-1'  setIsRenderLanguage={setIsRenderLanguage} />}
              <button ref={navButton} type='button' className='h-10 w-10 hover:bg-customGray-200 block md:hidden focus:outline-none rounded-full pl-2' onClick={() => {
                if (isOpenNav) {
                  (setIsRenderLanguage(false));
                } else {
                  setIsRenderLanguage(!isRenderLanguage);
                }
                setIsOpenNav(!isOpenNav);
              }}>
                {isOpenNav 
                  ? <img className='w-6' src='./assets/icons/closeIcon.svg' alt='Headline closed button'></img>
                  : <img className='w-6' src='./assets/icons/menuIcon.svg' alt='Headline open button'></img>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
      {isXl && <LanguageButton hasText={true} className='absolute xl:right-[2.4%] 2xl:right-[3.4%] 3xl:right-[4.4%] top-[22px] flex-col items-center gap-1' />}
    </header>
  );
};
