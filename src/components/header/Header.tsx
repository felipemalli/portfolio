import { useEffect, useRef, useState } from 'react';
import { ILanguageOptions, useLanguageContext } from '../../contexts';
import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Header: React.FC = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navButton = useRef<HTMLButtonElement | null>(null);

  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutsideLanguage);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutsideLanguage);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (navButton.current && navButton.current !== event.target && !navButton.current.contains(event.target as Node) && navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpenNav(false);
    }
  };

  const handleClickOutsideLanguage = (event: MouseEvent) => {
    if (languageRef.current && languageRef.current !== event.target && !languageRef.current.contains(event.target as Node)) {
      setIsOpenLanguage(false);
    }
  };
  
  const { translations, changeLanguage, languageNames } = useLanguageContext();

  return (
    <header>
      <div className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <div className='flex justify-between md:justify-center -mb-[88px] xl:justify-start p-6 md:my-4 xl:ml-20 2xl:ml-12'>
          <img className='flex h-6 w-6 scale-75 xl:-ml-28 2xl:-ml-16 mr-10 2xl:mr-16 mt-2'  src='./assets/background/icon.png' alt='Felipevm icon'/>
          <div className='flex'>
            <div className={`${!isOpenNav ? 'hidden' : 'absolute'} w-screen md:w-auto md:flex md:relative right-1/2 translate-x-1/2 mt-12 md:mt-0 border-y md:border-none`}>
              <nav ref={navRef} className={'flex flex-col md:flex-row items-center text-center py-4 md:py-0 space-y-2 md:space-y-0 space-x-8 2xl:space-x-10 uppercase text-customBlue-500 tracking-widest font-semibold bg-secondary-900 md:bg-transparent'} onClick={() => setIsOpenNav(false)}>
                <NavOptionNavigation className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' componentId='content' areaNameNav='knowledge'>{translations.nav_knowledge}</NavOptionNavigation>
                <NavOptionNavigation className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' componentId='content' areaNameNav='skills'>{translations.nav_skills}</NavOptionNavigation>
                <NavOptionNavigation className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' componentId='about'>{translations.nav_about}</NavOptionNavigation>
                <NavOptionLink className='hover:scale-105 hover:bg-customGray-200 md:hover:bg-transparent w-screen h-10 md:w-auto flex items-center justify-center' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>{translations.nav_contact}</NavOptionLink>
              </nav>
            </div>
            <button ref={navButton} type='button' className='h-10 w-10 block md:hidden  focus:outline-none hover:bg-customGray-200 rounded-full pl-2' onClick={() => setIsOpenNav(!isOpenNav)}>
              {isOpenNav 
                ? <img className='w-6' src='./assets/icons/closeIcon.svg' alt='Headline closed button'></img>
                : <img className='w-6' src='./assets/icons/menuIcon.svg' alt='Headline open button'></img>
              }
            </button>
          </div>
        </div>
      </div>
      <div ref={languageRef} className='absolute right-[2.5%] top-[22px] flex flex-col items-center gap-1'>
        <button className='flex h-10 items-center justify-end space-x-[5px] w-full'
          onClick={ () => setIsOpenLanguage(!isOpenLanguage)}>
          <p className='font-semibold text-customBlue-500 uppercase text-sm -mb-1 tracking-widest'>{translations.language}</p>
          <img className='flex h-6 w-6' src='./assets/icons/languageGlobe.svg' alt='Language icon'/>
        </button>
        {isOpenLanguage && Object.entries(languageNames).map(([language, languageName]) => (
          <button key={language} className='w-full border-t p-2 font-medium text-customBlue-500 uppercase text-sm -mb-1'
            onClick={() => {
              changeLanguage(language as ILanguageOptions);
              setIsOpenLanguage(false);
            }}
          >
            {languageName}
          </button>
        ))}
      </div>
    </header>
  );
};
