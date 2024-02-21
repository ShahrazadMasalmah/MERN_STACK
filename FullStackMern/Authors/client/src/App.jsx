import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthorMain from './views/AuthorMain';
import AuthorForm from './views/AuthorForm';
import UpdateAuthor from './views/UpdateAuthor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function App() {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

   //make a post request to create an author
  const createAuthor = author => {
    axios.post("http://localhost:8000/api/authors", author)
        .then(res => {
          setAuthors([...authors, res.data]);
          setErrors([]);
          navigate("/authors");
        })
        .catch(err=>{
          const errorResponse = err.response.data.errors;
          console.log(errorResponse);
          const errorArr = [];
          for(const key of Object.keys(errorResponse)){
            errorArr.push(errorResponse[key].message);
          }
          setErrors(errorArr);
        })
  }
  return (
    <>
     <Routes>
        <Route path='/authors' element={ <AuthorMain authors={ authors } setAuthors={ setAuthors } /> } />
        <Route path='/authors/new' element={ <AuthorForm initialName="" 
        onSubmitProp={ createAuthor } errors={ errors } /> } />
        <Route path='/authors/:id/edit' element={ <UpdateAuthor /> } />
     </Routes>
    </>
  )
}

export default App
