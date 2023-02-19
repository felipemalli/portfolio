import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import CourseArea from './components/CourseArea';
import ProjectArea from './components/ProjectArea';
import { SearchBar } from './components/SearchBar';
import { breakpoints } from './utils/breakpoints';

function App() {
  const isXl = useMediaQuery(breakpoints.isXl)
  console.log(isXl)


  return (
    <div>
      <main className='w-fill md:mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <motion.nav animate={{ y: 0 }} initial={{ y: -400 }} transition={{ type: 'tween', duration: 1.5 }} className='flex justify-center xl:justify-start p-6 my-6 xl:ml-20 2xl:ml-12'>
          <div className='hidden items-center space-x-8 uppercase text-gray-400 md:flex'>
            <a href='#projects' className="text-[#58656F] tracking-widest font-semibold hover:scale-105">
              Projects
            </a>
            <a href='#courses' className="text-[#58656F] tracking-widest font-semibold hover:scale-105">
              Courses
            </a>
            <a href='#skills' className="text-[#58656F] tracking-widest font-semibold hover:scale-105">
              Skills
            </a>
            <a href='#moreaboutme' className="text-[#58656F] tracking-widest font-semibold w-max hover:scale-105">
              More about me
            </a>
          </div>
        </motion.nav>
        <motion.div animate={{ y: 0 }} initial={{ y: 700 }} transition={{ type: 'tween', duration: 1.5 }}>
          <section className='flex flex-col xl:flex-row justify-center 2xl:justify-evenly items-center 2xl:gap-32 gap-3 -mt-10 2xl:mt-0'>
            <div className='flex flex-col justify-center lg:w-[32rem] xl:-mb-12 2xl:mb-0 mt-10'>
              <h1 className='text-[#212C35] text-6xl font-semibold text-center xl:text-left'>Felipe Malliagros</h1>
              <h3 className='text-[#58656F] text-2xl font-semibold mt-7 text-center xl:text-left'>Full stack developer</h3>
              <p className='text-[#58656F] text-base font-normal mt-7 text-center xl:text-left'>I'm a logic and creativity guy. Specialized in backend, but I like all areas of web development. I'm always studying to keep myself qualified and updated.</p>
              <div className='mt-7 text-center xl:text-left'>
                <button className='w-32 h-14 mr-4 bg-[#D5685A] hover:bg-[#e4e4e4] hover:text-[#58656F] text-[#fbfbfb] active:bg-green-400 rounded-md text-sm transition-color duration-200 '>
                  Contact me
                </button>
                <button className='w-32 h-14 border border-[#D5685A] hover:bg-[#e4e4e4] text-[#58656F] active:bg-green-400 rounded-md text-sm transition-color duration-200 '>
                  Download CV
                </button>
              </div>
            </div>
            <div className='md:flex items-center justify-center mt-10 xl:mt-0 hidden'>
              <motion.img animate={{ y: 0 }} initial={{ y: 700 }} transition={{ type: 'tween', duration: 1.5, delay: 0.5}} src='src/assets/background/felipeEmpty.png' className='w-[30rem] lg:w-[33rem] 2xl:w-[40rem] mt-10'></motion.img>
            </div>
            <img src="src/assets/icons/cleanArrow.svg" className='absolute bottom-4 invisible xl:visible'></img>
          </section>
          <section className='relative mt-36 md:mt-0'>
            <ProjectArea></ProjectArea>
            <SearchBar></SearchBar>
            <CourseArea></CourseArea>
          </section>
        </motion.div>
        <img src="src/assets/background/circle.svg" className='absolute opacity-80 -top-[70%] left-[70%] 2xl:-top-[80%] -z-10 scale-125 invisible xl:visible'></img>
      </main>
      <a className='' href='#header'> /\ </a>
    </div>
  )
}

export default App
