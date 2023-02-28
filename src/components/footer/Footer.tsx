import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Footer: React.FC = () => {
  return (
    <footer className='flex justify-center p-3 mt-64 bg-[#D46253] opacity-80'>
      <p className='hidden lg:flex lg:absolute lg:left-10 font-medium text-sm text-[#f9f9f9]'>© 2023 Felipe Vahia Malliagros</p>
      <nav className='items-center space-x-4 md:space-x-48 uppercase text-[#f9f9f9] font-medium text-sm'>
        <NavOptionNavigation className='hover:opacity-80' componentId='content' areaNameNav='knowledge'>Knowledge</NavOptionNavigation>
        <NavOptionNavigation className='hover:opacity-80' componentId='content' areaNameNav='skills'>Skills</NavOptionNavigation>
        <NavOptionLink className='hover:opacity-80' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>Contact</NavOptionLink>
        <NavOptionNavigation className='hover:opacity-80' componentId=''>About</NavOptionNavigation>
      </nav>
    </footer>
  );
};

