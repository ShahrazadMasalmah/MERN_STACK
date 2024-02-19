import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default (props) => {
    const { id } = useParams();
    // keep track of the inputs
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(error => console.error(error))
    }, []);

    //Handle when the form is submitted
    const updateProduct = e => {
        e.preventDefault();
        //make a patch request to update a product
        axios.patch("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
            .then(res=>console.log("Rsponse: ", res))
            .catch(err=>console.log("Error: ", err))
    }

    //onChange to update title, price, description
    return(
        <>
            <h1 className="text-primary mb-4">Update Product</h1>
            <form onSubmit={ updateProduct }>
            <p>
                <label className="form-label fw-bold">Title:</label>
                <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label className="form-label fw-bold">Price:</label>
                <input className="form-control" type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label className="form-label fw-bold">Description:</label>
                <textarea className="form-control" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <div className="d-flex justify-content-center">
                <input className="btn btn-primary w-50" type="submit" value="Update"/>
            </div>
            
            </form>
        </>
    );
}