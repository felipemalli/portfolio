import { useState } from 'react'
import CourseArea from './components/CourseArea'
import ProjectArea from './components/ProjectArea'
import { SearchBar } from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-[#fbfbfb] h-auto">
      <header></header>
      <main>
        <p className="text-gray-700">
          Portfolio
        </p>
        <section className='relative w-[89.938rem] h-[52] m-auto'>
          <ProjectArea></ProjectArea>
          <SearchBar></SearchBar>
          <CourseArea></CourseArea>
        </section>
      </main>
    </div>
  )
}

export default App
