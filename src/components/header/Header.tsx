import { useEffect, useRef, useState } from 'react';
import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (navButton.current && navButton.current !== event.target && !navButton.current.contains(event.target as Node) && navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <header className='flex justify-between md:justify-center -mb-[88px] xl:justify-start p-6 md:my-4 xl:ml-20 2xl:ml-12'>
      <img className='flex h-6 w-6 scale-75 md:-ml-16 md:mr-16 mt-2' src="src/assets/background/icon.png" alt='Felipevm icon'/>
      <div className='flex'>
        <div className={`${!isOpen ? 'hidden' : 'absolute'} w-screen md:w-auto md:flex md:relative right-1/2 translate-x-1/2 mt-12 md:mt-0 border-y md:border-none`}>
          <nav ref={navRef} className={'flex flex-col md:flex-row items-center text-center py-4 md:py-0 space-y-2 md:space-y-0 md:space-x-6 uppercase text-customBlue-500 tracking-widest font-semibold bg-[secondary-900] md:bg-transparent'} onClick={() => setIsOpen(false)}>
            <NavOptionNavigation className='hover:scale-105 hover:bg-[#eaeced] md:hover:bg-transparent px-2 w-screen h-10 md:w-auto flex items-center justify-center' componentId='content' areaNameNav='knowledge'>Knowledge</NavOptionNavigation>
            <NavOptionNavigation className='hover:scale-105 hover:bg-[#eaeced] md:hover:bg-transparent px-2 w-screen h-10 md:w-auto flex items-center justify-center' componentId='content' areaNameNav='skills'>Skills</NavOptionNavigation>
            <NavOptionNavigation className='hover:scale-105 hover:bg-[#eaeced] md:hover:bg-transparent px-2 w-screen h-10 md:w-auto flex items-center justify-center' componentId='about'>About</NavOptionNavigation>
            <NavOptionLink className='hover:scale-105 hover:bg-[#eaeced] md:hover:bg-transparent px-2 w-screen h-10 md:w-auto flex items-center justify-center' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>Contact</NavOptionLink>
          </nav>
        </div>
        <button ref={navButton} type='button' className='h-10 w-10 block md:hidden  focus:outline-none hover:bg-[#eaeced] rounded-full pl-2' onClick={() => setIsOpen(!isOpen)}>
          {isOpen 
            ? <img className='w-6' src="src/assets/icons/closeIcon.svg" alt='Headline closed button'></img>
            : <img className='w-6' src="src/assets/icons/menuIcon.svg" alt='Headline open button'></img>
          }
        </button>
      </div>
    </header>
  );
};
