import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App2 from './App2.jsx'
import Nav from './nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App2 />
  </StrictMode>,
)
