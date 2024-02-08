import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import SubContents from './components/SubContents'
import Advertisement from './components/Advertisement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      <Navigation />
      <Main>
          <SubContents/>
          <SubContents />
          <SubContents />
          <Advertisement />
      </Main>
    </div>
  )
}

export default App
