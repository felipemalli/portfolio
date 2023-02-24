import { motion } from 'framer-motion';
import { ContentCardSection } from '../components/content-card-section/ContentCardSection';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
          <Header />
        </motion.div>
        <main>
          <motion.div initial={{ opacity: 0.5, y: 700 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
            <IntroductionSection />
            <ContentCardSection />
          </motion.div>
          <img src="src/assets/background/circle.svg" className='absolute opacity-80 -top-[70%] left-[70%] 2xl:-top-[80%] -z-10 scale-125 invisible xl:visible' alt='Background circle'></img>
        </main>
        <div className='my-[50rem]'/>
      </div>
    </div>
  );
};