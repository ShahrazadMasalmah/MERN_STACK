import React, { useState } from "react";
import axios from 'axios';

export default (props) => {
    // keep track of the inputs
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    //Handle when the form is submitted
    const handleSubmit = e => {
        e.preventDefault();
        //make a post request to create a product
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res=>console.log("Rsponse: ", res))
            .catch(err=>console.log("Error: ", err))
        setTitle("");
        setPrice(0);
        setDescription("");    
    }

    //onChange to update title, price, description
    return(
        <>
            <h1 className="text-primary mb-4">Product Manager</h1>
            <form onSubmit={ handleSubmit }>
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
                <input className="btn btn-primary w-50" type="submit" value="Create"/>
            </div>
            
            </form>
        </>
    );
}