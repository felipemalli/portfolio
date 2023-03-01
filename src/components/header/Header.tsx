import { useState } from 'react';
import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className='flex justify-between md:justify-center -mb-[72px] xl:justify-start p-6 md:my-6 xl:ml-20 2xl:ml-12'>
      <img className='flex h-6 w-6 scale-75 md:-ml-16 md:mr-16' src="src/assets/background/icon.png" alt='Felipevm icon'/>
      <div className='flex'>
        <div className={`${isOpen ? 'hidden' : 'absolute'} w-screen md:w-auto md:flex md:relative right-1/2 translate-x-1/2 mt-12 md:mt-0 border-y md:border-none`}>
          <nav className={'flex flex-col md:flex-row items-center py-2 md:py-0 space-y-6 md:space-y-0 md:space-x-8 uppercase text-[#58656F] tracking-widest font-semibold'}>
            <NavOptionNavigation className='hover:scale-105' componentId='content' areaNameNav='knowledge'>Knowledge</NavOptionNavigation>
            <NavOptionNavigation className='hover:scale-105' componentId='content' areaNameNav='skills'>Skills</NavOptionNavigation>
            <NavOptionNavigation className='hover:scale-105' componentId='about'>About</NavOptionNavigation>
            <NavOptionLink className='hover:scale-105' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>Contact</NavOptionLink>
          </nav>
        </div>
        <button type='button' className='block hamburguer md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          {isOpen 
            ? <img src="src/assets/icons/menuIcon.svg" alt='Headline open button'></img>
            : <img src="src/assets/icons/closeIcon.svg" alt='Headline closed button'></img>
          }
        </button>
      </div>
    </header>
  );
};
