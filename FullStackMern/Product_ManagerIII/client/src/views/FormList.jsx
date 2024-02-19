import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const FormList = props => {
    const { loaded, products, removeFromDom } = props;

    return(
        <div>
            <ProductForm />
            <hr />
            { loaded && <ProductList products={ products } removeFromDom={ removeFromDom } /> }
        </div>
    );
}

export default FormList;