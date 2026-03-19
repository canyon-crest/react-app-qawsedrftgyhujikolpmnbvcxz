import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2() {
  const [count, setCount] = useState(0)
  const [increase, setIncrease] = useState(1)
  const [apiData, setApiData] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setApiData(data.message); // "message" contains the image URL
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };


  return (
    <>
      <h1>About page</h1>

      <p>
        This is my website, it contains 3 pages. A home page, about page, and a shop page. The home page contains a clicking game and an option to sign in. The shop page allows you to purchase various collectable items. The about page is the page you are currently on. It contains this description as well as a button for random dog images.
      </p>




      <button onClick={fetchDogImage}>press this for a dog</button>
      {apiData && <img src={apiData} alt="Random Dog" />}




      <footer>
        abhinav 2026
      </footer>
    </>
  )
}

export default App2
