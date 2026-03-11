import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2() {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)

  return (
    <>
      <h1>About page</h1>

      <p className="read-the-docs">
        this is the about page. it has information about my website.
      </p>
      <footer>
        abhinav 2026
      </footer>
    </>
  )
}

export default App2
