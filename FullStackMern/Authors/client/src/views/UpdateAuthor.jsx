import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom"; 
import AuthorForm from "./AuthorForm";

const UpdateAuthor = props => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                //console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [id]);


    const SubmitUpdateAuthor = author => {
        //make a patch request to update an author
        axios.put("http://localhost:8000/api/authors/" + id, author)
            .then(res=>{
                console.log("Response: ", res);
                navigate("/authors");
            })
            .catch(err => {
                console.log(err);
                if (err.response && err.response.data && err.response.data.errors) {
                    const errorResponse = err.response.data.errors;
                    const errorArr = Object.values(errorResponse);
                    setErrors(errorArr);
                    console.log(console.log(errorArr));
                } else {
                    setErrors([{ message: "An error occurred while editing the author." }]);
                }
            })     
    }

    return(
        <>
            {
                loaded && (
                    <AuthorForm 
                    initialName={author.name}
                    onSubmitProp={SubmitUpdateAuthor}
                    errors={errors}/>
                )
            }
            
        </>
    );

}

export default UpdateAuthor;