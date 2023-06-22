import { useChangeAreaContext } from '../../../contexts';


export const ChangeAreaButtons: React.FC = () => {
  const { toggleChangeArea } = useChangeAreaContext();
  
  return (
    <section className='relative md:mt-0'>
      <button className='absolute left-1 md:-left-[40px] 2xl:-left-[39.7px] top-1/2 -translate-y-1/2 md:ml-[0.3rem] w-9 h-9 rounded-full md:rounded-r-none border border-customBlue-300 bg-customGray-300 flex items-center justify-center scale-90 md:scale-100 hover:bg-secondary-900 active:bg-customGray-300 transition-colors duration-200'
        onClick={() => toggleChangeArea()}
      >
        <img src='./assets/icons/roundedArrow.svg' className='w-4.5 mr-0.5 md:mr-0 md:ml-1 mb-0.5 scale-90 md:scale-100' alt='Change area'></img>
      </button>
      <button className='absolute right-1 md:-right-10 top-1/2 -translate-y-1/2 md:mr-[0.3rem] w-9 h-9 rounded-full md:rounded-l-none border border-customBlue-300 bg-customGray-300 flex items-center justify-center scale-90 md:scale-100 hover:bg-secondary-900 active:bg-customGray-300 transition-colors duration-200'
        onClick={() => toggleChangeArea()}>
        <img src='./assets/icons/roundedArrow.svg' className='w-4.5 md:mr-1 mt-0.5 rotate-180 scale-90 md:scale-100' alt='Change area'></img>
      </button>
    </section>
  );
};
