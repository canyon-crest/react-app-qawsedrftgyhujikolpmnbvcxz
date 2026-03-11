import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count+increase) } style={{ marginBottom: '20px' }}>
          count is {count}
        </button>
        
        <div>
          <button onClick={() => setCount((count) => 0)}>
            reset
          </button>
          <button onClick={() => setCount((count) => count + 50)}>
            hacks
         </button>
         <button onClick={() => setCount((count) => count - 50)}>
            anti-hacks
          </button>
          <button onClick={() => setIncrease((increase) => 5000)}>
            activate super mode
         </button>
          <button onClick={() => setIncrease((increase) => 1)}>
            turn off super mode
          </button>
        </div>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer>
        abhinav 2026
      </footer>
    </>
  )
}

export default Home
