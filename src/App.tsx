import { useState } from 'react'
import CourseArea from './components/CourseArea'
import ProjectArea from './components/ProjectArea'
import { SearchBar } from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-[#fbfbfb] h-screen">
      <header></header>
      <main>
        <p className="text-gray-700">
          Portfolio
        </p>
        <section className='relative'>
          <ProjectArea></ProjectArea>
          <SearchBar></SearchBar>
          <CourseArea></CourseArea>
        </section>
      </main>
    </div>
  )
}

export default App
