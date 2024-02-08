import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTab from './components/MyTab'

function App() {
  const [count, setCount] = useState(0)
  const myTabs = ['Tab1', 'Tab2', 'Tab3'];

  return (
    <>
      <MyTab tabs={ myTabs }/>
    </>
  )
}

export default App
