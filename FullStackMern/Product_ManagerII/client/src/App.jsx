import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormList from './views/FormList';
import ProductDetail from './views/ProductDetail';

function App() {

  return (
    <>
      <Routes>
        <Route element={ <FormList /> } path='/products' />
        <Route element={ <ProductDetail /> } path='/products/:id' />
      </Routes>
    </>
  )
}

export default App
