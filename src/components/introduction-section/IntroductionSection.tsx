import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export const IntroductionSection: React.FC = () => {
  
  return (
    <section className='flex flex-col xl:flex-row justify-center 2xl:justify-evenly items-center 2xl:gap-32 gap-3 -mt-10 2xl:mt-0'>
      <div className='flex flex-col justify-center lg:w-[32rem] xl:-mb-12 2xl:mb-0 mt-10'>
        <h1 className='text-[#212C35] text-6xl font-semibold text-center xl:text-left'>Felipe Malliagros</h1>
        <div className='text-[#58656F] text-2xl font-semibold mt-7 text-center xl:text-left'>
          <TypeAnimation sequence={[
            'Full Stack',
            3000,
            'Back End',
            3000,
          ]} speed={50} wrapper='span' repeat={Infinity} cursor={false}
          />
          <span> developer</span>
        </div>
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
  )
}