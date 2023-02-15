import { useState } from 'react'
import CardSection from './components/CardSection'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-gray-100">
      <p className="text-gray-700">
        Portfolio
      </p>
      <CardSection></CardSection>
    </div>
  )
}

export default App
