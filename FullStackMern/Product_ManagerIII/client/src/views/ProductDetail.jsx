import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { products, setProducts } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error))
    }, [product])

    const deleteProduct = productId => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => setProducts(products.filter(product => product._id != productId)))
            .catch(err => console.error(err))
        navigate("/products")    
    }

    return(
        <div className="border border-dark p-3 text-center shadow">
            <h1 className="text-primary">{ product.title }</h1>
            <p className="mt-4"><strong>Price:</strong> ${ product.price }</p>
            <p><strong>Description:</strong> { product.description }</p>
            <Link to={ "/products/" + product._id + "/edit" }>Edit { product.title }</Link>
            <button className='btn btn-danger ms-3' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    );
}

export default ProductDetail;