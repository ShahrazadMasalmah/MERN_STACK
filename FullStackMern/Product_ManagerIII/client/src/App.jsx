import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormList from './views/FormList';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/UpdateProduct';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                //console.log(res.data.products);
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(error => console.log(error));
    }, [products])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

  return (
    <>
      <Routes>
        <Route element={ <FormList products={ products } removeFromDom={ removeFromDom } 
        loaded={loaded} /> } path='/products' />
        <Route element={ <ProductDetail products={ products } setProducts={ setProducts } /> } path='/products/:id' />
        <Route element={ <UpdateProduct /> } path='/products/:id/edit' />
      </Routes>
    </>
  )
}

export default App
