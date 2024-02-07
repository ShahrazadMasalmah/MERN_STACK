import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard';

function App() {

  return (
    <>
      <PersonCard firstName={ "Doe" } lastName={ "Jane" } age={ 45 } hairColor={ "Black" }/>
      <PersonCard firstName={ "Smith" } lastName={ "John" } age={ 88 } hairColor={ "Brown" }/>
    </>
  )
}

export default App
