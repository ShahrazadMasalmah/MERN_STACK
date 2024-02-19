import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { products, removeFromDom } = props;

    const deleteProduct = (productId) => {
        console.log("Hellooooo");
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='text-center'>
        {products.map((product, idx) => {
            return <p key={idx}>
                <Link to={"/products/" + product._id}>
                    {product.title}
                </Link>
                <button className='btn btn-danger ms-3' onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
            </p>
        })}
    </div>
    )
}

export default ProductList; 