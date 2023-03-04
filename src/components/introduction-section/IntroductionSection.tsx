import { TypeAnimation } from 'react-type-animation';
import { backgroundImages } from '../../assets';
import { AnimatedDiv } from '../../utils/AnimatedDiv';
import { openUrl } from '../../utils/openUrl';

export const IntroductionSection: React.FC = () => {
  return (
    <section className='flex flex-col xl:flex-row justify-center 2xl:justify-evenly items-center 2xl:gap-32 gap-3 2xl:mt-0 h-screen md:h-auto'>
      <div className='flex flex-col justify-center lg:w-[32rem] xl:-mb-12 2xl:mb-0 mt-10'>
        <h1 className='text-customBlue-900 text-6xl font-semibold text-center xl:text-left'>Felipe Malliagros</h1>
        <div className='text-customBlue-500 text-2xl font-semibold mt-7 text-center xl:text-left'>
          <TypeAnimation sequence={[
            'Full Stack',
            3000,
            'Back End',
            3000,
          ]} speed={50} wrapper='span' repeat={Infinity} cursor={false}
          />
          <span> developer</span>
        </div>
        <p className='text-customBlue-500 text-base font-normal text-center xl:text-left mx-7 md:mx-0 mt-7'>I{'\''}m a logic and creativity guy. Specialized in backend, but I like all areas of web development. I{'\''}m always studying to keep myself qualified and updated.</p>
        <div className='mt-7 text-center xl:text-left'>
          <button className='w-32 h-14 mr-4 bg-primary-500 hover:bg-customGray-300 hover:text-customBlue-500 text-secondary-500 active:bg-green-400 rounded-md text-sm transition-color duration-200 font-medium'
            onClick={() => openUrl('https://www.linkedin.com/in/felipe-vahia-malliagros/')}
          >
            Contact me
          </button>
          <button className='w-32 h-14 border border-primary-500 hover:bg-customGray-300 text-customBlue-500 active:bg-green-400 rounded-md text-sm transition-color duration-200'
            onClick={() => openUrl('https://github.com/felipemalli')}
          >
            Repositories
          </button>
        </div>
      </div>
      <div className='md:flex items-center justify-center mt-10 xl:mt-0 hidden'>
        {backgroundImages.felipeEmpty && 
          <AnimatedDiv initialAnimation='translate-y-150' finalAnimation='translate-y-0' duration='duration-1400' delay='delay-750'>
            <div className='w-[30rem] lg:w-[33rem] 2xl:w-[40rem] mt-10 h-[408.19px] lg:h-[449px] 2xl:h-[544.25px]'>
              <img src={backgroundImages.felipeEmpty} className='w-[30rem] lg:w-[33rem] 2xl:w-[40rem] h- mt-10' alt='Felipe image'></img>
            </div>
          </AnimatedDiv>
        }
      </div>
    </section>
  );
};

