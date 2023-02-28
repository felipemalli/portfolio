import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Header: React.FC = () => {
  return (
    <header className='hidden md:flex justify-center xl:justify-start p-6 my-6 xl:ml-20 2xl:ml-12'>
      <img className='w-6 -ml-16 mr-16 scale-75' src="src/assets/background/icon.png" alt='Felipevm icon'></img>
      <nav className='hidden items-center space-x-8 uppercase text-[#58656F] tracking-widest md:flex font-semibold'>
        <NavOptionNavigation className='hover:scale-105' componentId='content' areaNameNav='knowledge'>Knowledge</NavOptionNavigation>
        <NavOptionNavigation className='hover:scale-105' componentId='content' areaNameNav='skills'>Skills</NavOptionNavigation>
        <NavOptionNavigation className='hover:scale-105' componentId='about'>About</NavOptionNavigation>
        <NavOptionLink className='hover:scale-105' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>Contact</NavOptionLink>
      </nav>
    </header>
  );
};
