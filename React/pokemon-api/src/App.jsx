import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [names, setNames] = useState([]);

  function handleFetch(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => (response.json()))
    .then(response => (setNames(response.results)))
  }

  return (
    <>
      <button onClick={handleFetch}>Fetch Pokemon</button>
      <ul>
        {
          names.map((item, index) => (<strong key={index}><li>{item.name}</li></strong>))
        }
      </ul>
    </>
  )
}

export default App
