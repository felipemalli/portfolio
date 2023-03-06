import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Footer: React.FC = () => {

  return (
    <footer className='relative flex justify-center p-5 mt-44 md:mt-52 bg-primary-500'>
      <div className='absolute -top-5 left-1/2 -translate-x-1/2 z-10'>
        <NavOptionNavigation componentId='header' className='hover:opacity-80' ><img src='./assets/icons/upArrow.svg' /></NavOptionNavigation>
      </div>
      <p className='hidden 2xl:flex 2xl:absolute lg:left-10 font-medium text-sm text-secondary-700'>© 2023 Felipe Vahia Malliagros</p>
      <nav className='items-center space-x-36 lg:space-x-48 text-secondary-700 font-medium sm:text-sm text-xs'>
        <NavOptionLink className='hover:opacity-80' url='https://github.com/felipemalli'>Github</NavOptionLink>
        <NavOptionLink className='hover:opacity-80' url='https://www.linkedin.com/in/felipe-vahia-malliagros'>Linkedin</NavOptionLink>
      </nav>
    </footer>
  );
};

