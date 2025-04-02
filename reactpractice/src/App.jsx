import { useState } from 'react'
import './App.css'
import StateManagementComparison from './StateManagementComparison'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateManagementComparison/>
    </>
  )
}

export default App;
