import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const FormList = props => {
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

    return(
        <div>
            <ProductForm />
            <hr />
            { loaded && <ProductList products={ products } /> }
        </div>
    );
}

export default FormList;