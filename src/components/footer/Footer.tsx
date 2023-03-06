import { useLanguageContext } from '../../contexts';
import { NavOptionLink } from '../shared/Nav/NavOptionLink';
import { NavOptionNavigation } from '../shared/Nav/NavOptionNavigation';

export const Footer: React.FC = () => {

  const { translations } = useLanguageContext();

  return (
    <footer className='flex justify-center p-3 mt-40 md:mt-48 bg-primary-500'>
      <p className='hidden 2xl:flex 2xl:absolute lg:left-10 font-medium text-sm text-secondary-700'>© 2023 Felipe Vahia Malliagros</p>
      <nav className='items-center space-x-5 md:space-x-20 lg:space-x-48 uppercase text-secondary-700 font-medium sm:text-sm text-xs'>
        <NavOptionNavigation className='hover:opacity-80' componentId='content' areaNameNav='knowledge'>{translations.nav_knowledge}</NavOptionNavigation>
        <NavOptionNavigation className='hover:opacity-80' componentId='content' areaNameNav='skills'>{translations.nav_skills}</NavOptionNavigation>
        <NavOptionNavigation className='hover:opacity-80' componentId='about'>{translations.nav_about}</NavOptionNavigation>
        <NavOptionLink className='hover:opacity-80' url='https://www.linkedin.com/in/felipe-vahia-malliagros/'>{translations.nav_contact}</NavOptionLink>
      </nav>
    </footer>
  );
};

