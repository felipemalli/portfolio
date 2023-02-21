import { motion } from 'framer-motion';
import { CourseArea } from '../components/content-card-section/CourseArea';
import { SearchBar } from '../components/content-card-section/particular/SearchBar';
import { ProjectArea } from '../components/content-card-section/ProjectArea';
import { Header } from '../components/header/Header';
import { IntroductionSection } from '../components/introduction-section/IntroductionSection';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <motion.div initial={{ y: -400 }} animate={{ y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
          <Header />
        </motion.div>
        <main>
          <motion.div initial={{ opacity: 0.5, y: 700 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', duration: 1.5 }}>
            <IntroductionSection />
            <section className='relative mt-36 md:mt-0'>
              <ProjectArea></ProjectArea>
              <SearchBar></SearchBar>
              <CourseArea></CourseArea>
            </section>
          </motion.div>
          <img src="src/assets/background/circle.svg" className='absolute opacity-80 -top-[70%] left-[70%] 2xl:-top-[80%] -z-10 scale-125 invisible xl:visible'></img>
        </main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis obcaecati quia? Quasi maiores esse alias reprehenderit laborum beatae! Vitae dolor velit, fugiat voluptate fuga eos quo vero ab voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad commodi minima, doloremque accusantium magni earum expedita, aspernatur excepturi dolorem, dolore numquam dolor natus saepe. Libero vitae excepturi sapiente et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident quod facere ipsa vero. Neque facere laudantium voluptatum voluptatibus dolorum quas minus nihil similique vel, eos aliquam dolore aliquid
        </p>
      </div>
    </div>
  );
};