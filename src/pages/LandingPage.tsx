import { backgroundImages } from '../assets';
import { AboutSection } from '../components/about-section/AboutSection';
import { ContentCardSection } from '../components/content-card-section/ContentCardSection';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';
import { AnimatedDiv } from '../utils/AnimatedDiv';

export const LandingPage: React.FC = () => {
  return (
    <main className='w-screen'>
      <article className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <AnimatedDiv initialAnimation='-translate-y-24' finalAnimation='translate-y-0' duration='duration-1800'>
          <Header />
        </AnimatedDiv>
 
        <AnimatedDiv initialAnimation='translate-y-170 opacity-50' finalAnimation='translate-y-0 opacity-100' duration='duration-1900'>
          <IntroductionSection />
          <ContentCardSection />
        </AnimatedDiv>
        <div className='absolute top-0 right-0 h-[200rem] w-screen -z-10'>
          <div className="relative w-100% h-[60vw] overflow-hidden -z-10">
            <img src={backgroundImages.circle} className='absolute -right-[65%] -top-[85%] -z-10 scale-125 invisible xl:visible' alt='Background circle'></img>
          </div>
        </div>
      </article>
      <div className='absolute bg-primary-300 mt-48 w-screen h-[70rem] sm:h-[65rem] md:h-[71rem] 2xl:h-[60rem] -z-10'/>
      <article className='md:mx-6 lg:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <AboutSection />
      </article>
      <Footer />
    </main>
  );
};