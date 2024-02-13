import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import WordNumberComponent from './components/WordNumberComponent';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/:wordNumber' element={ <WordNumberComponent /> } />
        <Route path='/:wordNumber/:textColor/:backColor' element={ <WordNumberComponent /> } />
      </Routes>
    </>
  )
}

export default App
