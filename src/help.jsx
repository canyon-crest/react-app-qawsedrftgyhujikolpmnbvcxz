import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Help() {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)

  return (
    <>
      <h1>Help page</h1>

      <p className="read-the-docs">
        Help me with my math homework please.
      </p>
      <footer>
        abhinav 2026
      </footer>
    </>
  )
}

export default Help
