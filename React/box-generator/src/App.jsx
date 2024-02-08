import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorForm from './components/ColorForm'
import ShowBox from './components/ShowBox'

function App() {
  const [arrayColors, setArrayColors] = useState([]);
  const changeColor = ( newColor ) => {
    setArrayColors( newColor );
}

  return (
    <>
      <ColorForm addColor={ changeColor } />
      <ShowBox sendColor={ arrayColors } />
    </>
  )
}

export default App
