import { useState } from 'react'
import CourseArea from './components/CourseArea'
import ProjectArea from './components/ProjectArea'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-[#fbfbfb] h-screen">
      <header></header>
      <main>
        <p className="text-gray-700">
          Portfolio
        </p>
        <section>
          <ProjectArea></ProjectArea>
          <CourseArea></CourseArea>
        </section>
      </main>
    </div>
  )
}

export default App
