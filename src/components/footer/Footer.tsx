import { NavOption } from '../shared/NavOption';

export const Footer: React.FC = () => {
  return (
    <footer className='flex justify-center p-3 mt-96 bg-[#D46253] opacity-80'>
      <p className='hidden lg:flex lg:absolute lg:left-10 font-medium text-sm text-[#f9f9f9]'>© 2023 Felipe Vahia Malliagros</p>
      <nav className='items-center space-x-4 md:space-x-48 uppercase text-[#f9f9f9] font-medium text-sm'>
        <NavOption className='hover:opacity-80' componentId='content' areaNameNav='knowledge'>Knowledge</NavOption>
        <NavOption className='hover:opacity-80' componentId='content' areaNameNav='skills'>Skills</NavOption>
        <NavOption className='hover:opacity-80' componentId=''>Contact</NavOption>
        <NavOption className='hover:opacity-80' componentId=''>About me</NavOption>
      </nav>
    </footer>
  );
};

