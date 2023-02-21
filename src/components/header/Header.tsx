import { NavOption } from './particular/NavOption';

export const Header: React.FC = () => {
  return (
    <header className='flex justify-center xl:justify-start p-6 my-6 xl:ml-20 2xl:ml-12'>
      <nav className='hidden items-center space-x-8 uppercase text-gray-400 md:flex'>
        <NavOption>Projects</NavOption>
        <NavOption>Courses</NavOption>
        <NavOption>Skills</NavOption>
        <NavOption>More about me</NavOption>
      </nav>
    </header>
  );
};
