import { useState } from 'react'
import './App.css'
import GoogleLogin from './signin'

function Home() {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)

  return (
    <>
      <h1>My React Website</h1>
      <p>This is the homepage for my website. Below is a clicking game and an option to sign in.</p>
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
      

      </div>
      <GoogleLogin></GoogleLogin>
      <footer>
        abhinav 2026
      </footer>
    </>
  )
}

export default Home
