import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';

function App() {

  return (
    <>
      <Routes>
        <Route path='/products' element={ <ProductForm /> } />
      </Routes>
    </>
  )
}

export default App
