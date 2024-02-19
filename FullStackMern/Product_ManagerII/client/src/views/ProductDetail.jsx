import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = props => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(error => console.log(error))
    }, [product])

    return(
        <div className="border border-dark p-3 text-center shadow">
            <h1 className="text-primary">{ product.title }</h1>
            <p className="mt-4"><strong>Price:</strong> ${ product.price }</p>
            <p><strong>Description:</strong> { product.description }</p>
        </div>
    );
}

export default ProductDetail;