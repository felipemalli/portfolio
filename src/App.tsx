import { useState } from 'react';
import CourseArea from './components/CourseArea';
import ProjectArea from './components/ProjectArea';
import { SearchBar } from './components/SearchBar';
// import { getBreakpoint } from './utils/breakpoint/updateBreakpoint';

function App() {
  const [count, setCount] = useState(0)

  console.log('called')

  // getBreakpoint()

  return (
    <div>
      <img src="src/assets/background/circle.svg" className='absolute left-1/2 -top-full -z-10 max-w-full invisible 2xl:visible'></img>
      <main className='w-fill mx-16 2xl:w-[89.938rem] 2xl:m-auto'>
        <nav className='flex justify-center 2xl:justify-start p-6 my-6 2xl:ml-12'>
          <div className='hidden items-center space-x-8 uppercase text-gray-400 md:flex'>
            <a href='#projects' className="text-[#58656F] tracking-widest font-semibold">
              Projects
            </a>
            <a href='#courses' className="text-[#58656F] tracking-widest font-semibold">
              Courses
            </a>
            <a href='#skills' className="text-[#58656F] tracking-widest font-semibold">
              Skills
            </a>
            <a href='#moreaboutme' className="text-[#58656F] tracking-widest font-semibold w-max">
              More about me
            </a>
          </div>
        </nav>
        <section className='flex flex-col xl:flex-row justify-center 2xl:justify-evenly items-center 2xl:gap-32'>
          <div className='flex flex-col justify-center lg:w-[32rem] mt-10'>
            <h1 className='text-[#212C35] text-6xl font-semibold lg:w-max text-center xl:text-left'>Felipe Malliagros</h1>
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
            <img src='src/assets/background/felipeEmpty.png' className='w-[30rem] lg:w-[33rem] 2xl:w-[40rem] mt-10'></img>
          </div>
          <img src="src/assets/icons/cleanArrow.svg" className='absolute bottom-4 invisible xl:visible'></img>
        </section>
        <section className='relative h-[52rem] mt-36 md:mt-0'>
          <ProjectArea></ProjectArea>
          <SearchBar></SearchBar>
          <CourseArea></CourseArea>
        </section>
      </main>
      <a className='' href='#header'> /\ </a>
    </div>
  )
}

export default App
