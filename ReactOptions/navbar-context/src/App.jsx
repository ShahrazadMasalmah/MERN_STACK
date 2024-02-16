import { useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'
import MyContext from './components/MyContext'

function App() {
  const [name, setName] = useState("Bob Smith");

  return (
    <>
      <MyContext.Provider  value={{ name, setName }}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </MyContext.Provider>
    </>
  )
}

export default App
