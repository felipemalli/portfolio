import { NavOption } from '../shared/NavOption';

export const Header: React.FC = () => {

  return (
    <header className='hidden md:flex justify-center xl:justify-start p-6 my-6 xl:ml-20 2xl:ml-12'>
      <nav className='hidden items-center space-x-8 uppercase text-[#58656F] tracking-widest md:flex font-semibold'>
        <NavOption className='hover:scale-105' componentId='content' areaNameNav='knowledge'>Knowledge</NavOption>
        <NavOption className='hover:scale-105' componentId='content' areaNameNav='skills'>Skills</NavOption>
        <NavOption className='hover:scale-105' componentId=''>Contact</NavOption>
        <NavOption className='hover:scale-105' componentId=''>More about me</NavOption>
      </nav>
    </header>
  );
};
