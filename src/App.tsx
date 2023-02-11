import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-yellow-600">
      <p className="text-gray-700">
        Portfolio
      </p>
    </div>
  )
}

export default App
