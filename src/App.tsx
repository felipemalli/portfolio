import { useState } from 'react'
import CourseArea from './components/CourseArea'
import ProjectArea from './components/ProjectArea'
import { SearchBar } from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-[#fbfbfb] h-auto">
      <header>
        <p id='header' className="text-gray-700">
          Portfolio
        </p>
      </header>
      <main className='w-fill mx-10 2xl:w-[89.938rem] 2xl:m-auto'>
        <section className='flex flex-col xl:flex-row justify-evenly items-center mx-12'>
          <div className='flex flex-col justify-center w-[32rem]'>
            <h1 className='text-[#212C35] text-6xl font-semibold w-max text-center xl:text-left'>Felipe Malliagros</h1>
            <h3 className='text-[#58656F] text-2xl font-semibold mt-7 text-center xl:text-left'>Full stack developer</h3>
            <p className='text-[#58656F] text-base font-medium mt-7 text-center xl:text-left'>I'm a logic and creativity guy. Specialized in backend, but I like all areas of web development. I'm always studying to keep myself qualified and updated.</p>
          </div>
          <div className='flex items-end justify-center mt-20'>
            <img src='src/assets/background/felipeMain.png' className=' w-[38rem] xl:w-[46rem]'></img>
          </div>
        </section>
        <section className='relative h-[52rem]'>
          <ProjectArea></ProjectArea>
          <SearchBar></SearchBar>
          <CourseArea></CourseArea>
        </section>
      </main>
      <img src='src/assets/background/arcMain.png' className='absolute right-0 top-0'></img>
      <a className='' href='#header'> /\ </a>
    </div>
  )
}

export default App
