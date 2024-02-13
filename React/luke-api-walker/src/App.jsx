import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarWarForm from './components/StarWarForm'
import axios from "axios";
import { Route, Routes, useNavigate } from 'react-router-dom'
import DisplayCategoryInformation from './components/DisplayCategoryInformation'
import NotFound from './components/NotFound'

function App() {
  const [options, setOptions] = useState([]);
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://swapi.dev/api/").
    then((response) => {
      setOptions(Object.keys(response.data));
    })
    .catch(error => navigate("/notfound"));
  }, []);



  const passThePath = (id, category) => {
    setId(id);
    setCategory(category);
  }

  return (
    <>
      <Routes>
        <Route path='/'  element={ <StarWarForm options={options} onUpdate={passThePath} /> } />
        <Route path='/:category/:id' element={ <DisplayCategoryInformation /> } />
        <Route path='/notfound' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
