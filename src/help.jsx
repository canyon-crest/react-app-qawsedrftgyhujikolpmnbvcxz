import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function Help() {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)

  return (
    <>
      <h1>Shop</h1>

      <Card name="Chair" description="Poorly Made" />
      <Card name="Random Rock" description="From Hawaii" />
      <Card name="NASA Computer" description="Pretty much brand new" />

      <footer>
        abhinav 2026
      </footer>
    </>
  )
}

export default Help
