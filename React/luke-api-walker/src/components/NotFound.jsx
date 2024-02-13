import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {

    return (
        <div className="notfound">
            <h1>These aren't the droids you're looking for</h1>
            <img src="https://media.thenerdstash.com/wp-content/uploads/2022/05/Ben-Not-The-Droids.jpg" alt="Obi Wan Kenobi" />
            <div>
                <Link to={ "/" }>Back Home</Link>
            </div>
            
        </div>
    )
}

export default NotFound;