import { NavOption } from './particular/NavOption';

export const Header: React.FC = () => {

  return (
    <header className='hidden md:flex justify-center xl:justify-start p-6 my-6 xl:ml-20 2xl:ml-12'>
      <nav className='hidden items-center space-x-8 uppercase text-gray-400 md:flex'>
        <NavOption componentId='content' areaNameNav='knowledge'>Knowledge</NavOption>
        <NavOption componentId='content' areaNameNav='skills'>Skills</NavOption>
        <NavOption componentId=''>Contact</NavOption>
        <NavOption componentId=''>More about me</NavOption>
      </nav>
    </header>
  );
};
