import { motion } from 'framer-motion';
import { AboutSection } from '../components/about-section/AboutSection';
import { ContentCardSection } from '../components/content-card-section/ContentCardSection';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';

export const LandingPage: React.FC = () => {
  return (
    <main>
      <article className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
          <Header />
        </motion.div>
        <motion.div initial={{ opacity: 0.5, y: 700 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
          <IntroductionSection />
          <ContentCardSection />
        </motion.div>
        <img src="src/assets/background/circle.svg" className='absolute -top-[70%] left-[65%] 2xl:-top-[110%] -z-10 scale-125 invisible xl:visible' alt='Background circle'></img>
      </article>
      <div className='absolute bg-primary-300 mt-48 w-screen h-[70rem] sm:h-[65rem] md:h-[71rem] 2xl:h-[60rem] -z-10'/>
      <article className='md:mx-6 lg:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <AboutSection />
      </article>
      <Footer />
    </main>
  );
};