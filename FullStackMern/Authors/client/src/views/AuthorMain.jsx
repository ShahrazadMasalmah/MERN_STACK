import React, { useEffect } from "react";
import AuthorList from "../components/AuthorList";
import { Link } from "react-router-dom";
import axios from "axios";

const AuthorMain = props => {
    const { authors, setAuthors } = props;
    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(error => console.log(error));
    }, [authors])

    const removeFromDom = authorId => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
            .then((res) => {
                console.log(res.data)
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch((err) => console.log(err))
    }


    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={ "/authors/new" }>Add an author</Link>
            <AuthorList authors={ authors } removeFromDom={ removeFromDom }  />
        </div>
    );
}

export default AuthorMain;