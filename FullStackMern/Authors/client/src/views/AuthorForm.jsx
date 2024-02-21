import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom"; 

const AuthorForm = props => {
    const {initialName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();

    //Handle when the form is submitted
    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({name})
        setName("");   
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <p className="mb-5"><Link to={ "/authors" }>Home</Link></p>
            {errors.map((error, index) => <p className="text-danger" key={index}>{error}</p>)}
            <form className="border border-black p-3 " onSubmit={ handleSubmit }>
                <p>
                    <label className="form-label">Name:</label>
                    <input className="form-control" type="text" value={name} onChange={ e => setName(e.target.value) } />
                </p>
                <p>
                    <button className="btn btn-danger" onClick={ () => navigate("/authors") }>Cancel</button>
                    <input className="btn btn-success ms-3" type="submit" value="Submit" />
                </p>
            </form>
        </div>
    );
}

export default AuthorForm;