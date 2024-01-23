import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='absolute top-0 right-0 left-0 bottom-0'>
      <Layout/>
    </div>
  )
}

export default App
