import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorList = props => {
    const { authors, removeFromDom } = props;
    const navigate = useNavigate();
    const sortedAuthors = authors.sort((a,b) => a.name.localeCompare(b.name));

    return(
        <div>
            <h5 className="mt-5" style={{ color: "#9349f5" }}>We have quotes by:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedAuthors.map((author, index) => {
                            return  <tr key={index}>
                                        <td style={{ color: "#9349f5" }}>{author.name}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={ () => navigate("/authors/" + author._id + "/edit") }>Edit</button>
                                            <button className="btn btn-danger ms-3" onClick={ () => removeFromDom(author._id) }>Delete</button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AuthorList;