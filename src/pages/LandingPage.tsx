import { useRef, useState } from 'react';
import { AboutSection } from '../components/about-section/AboutSection';
import { ContentCardSection } from '../components/content-card-section/ContentCardSection';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';
import { useOnScreen } from '../hooks';
import { AnimatedDiv } from '../utils';

export const LandingPage: React.FC = () => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <main ref={ref}>
      {!isImageLoaded && <img src='/assets/background/felipeEmpty.webp' className='hidden' onLoad={handleImageLoad} alt='Felipe image'/>}
      {isOnScreen && isImageLoaded && (
        <>
          <article>
            <AnimatedDiv initialAnimation='-translate-y-24' finalAnimation='translate-y-0' duration='duration-1800' position='relative' zindex={10}>
              <Header />
            </AnimatedDiv><AnimatedDiv className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto' initialAnimation='translate-y-170 opacity-50' finalAnimation='translate-y-0 opacity-100' duration='duration-1900' position='relative' zindex={0}>
              <IntroductionSection />
              <ContentCardSection />
            </AnimatedDiv>
          </article>
          <div className='absolute bg-primary-300 mt-[15rem] w-screen h-[50rem] sm-[h-60rem] md:h-[59rem] 2xl:h-[47.5rem] -z-10'/>
          <article className='mx-auto 3xl:w-[114.938rem]'>
            <AboutSection />
          </article>
          <Footer />
        </>
      )}
      <div className='absolute -top-1 w-10 -z-10 invisible xl:visible'>
        <div className="relative overflow-hidden -z-10 w-screen h-[100vw]">
          <img src='/assets/background/circle.svg' className='absolute top-0 left-1/2 -z-10 w-[50vw] h-[60vw]' alt='Background circle'></img>
        </div>
      </div>
    </main>
  );
};