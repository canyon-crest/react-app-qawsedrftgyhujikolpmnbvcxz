import { useState } from 'react'
import './App.css'
import Nav from './nav.jsx'
import Home from './home.jsx'
import App2 from './App2.jsx'
import Help from './help.jsx'

function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      <Nav setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <App2 /> }
      {page == "help" && <Help /> }
    </>
  )
}

export default App
