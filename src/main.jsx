import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './nav.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name="Apples" description="They are apples"/>
    <Card name="Pear" description="They are pears"/>
    <Card name="Grapes" description="They are green grapes"/>
    <App />
  </StrictMode>,
)
