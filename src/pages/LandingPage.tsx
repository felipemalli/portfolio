import { motion } from 'framer-motion';
import CourseArea from '../components/content-card-section/CourseArea';
import { SearchBar } from '../components/content-card-section/particular/SearchBar';
import ProjectArea from '../components/content-card-section/ProjectArea';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';


export const LandingPage: React.FC = () => {
  
  return (
    <div>
      <main className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <motion.div animate={{ y: 0 }} initial={{ y: -400 }} transition={{ type: 'tween', duration: 1.5 }}>
          <Header />
        </motion.div>
        <motion.div animate={{ y: 0 }} initial={{ y: 700 }} transition={{ type: 'tween', duration: 1.5 }}>
          <IntroductionSection />
          <section className='relative mt-36 md:mt-0'>
            <ProjectArea></ProjectArea>
            <SearchBar></SearchBar>
            <CourseArea></CourseArea>
          </section>
        </motion.div>
        <img src="src/assets/background/circle.svg" className='absolute opacity-80 -top-[70%] left-[70%] 2xl:-top-[80%] -z-10 scale-125 invisible xl:visible'></img>
      </main>
    </div>
  )
}