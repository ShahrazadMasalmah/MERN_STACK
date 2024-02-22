import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; 
import axios from "axios";

const PlayerForm = props => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("Undecided");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleAddPlayer = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", {
            name: name,
            preferredPosition: position,
            status: status
        })
            .then(res => {
                console.log(res);
                setErrors([]);
                //setName("");
                //setPosition("");
                navigate("/players/list");
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div>
            <div className="border border-dark w-75 mx-auto p-3 mt-5 shadow">
                <h3 className="text-primary">
                <NavLink to={ "/players/list" } className="me-2">List</NavLink>
                |
                <NavLink to={ "/players/addplayer" } className="ms-2">Add Player</NavLink>
                </h3>
                <form onSubmit={ handleAddPlayer } className="column mt-3 border border-dark mb-3 p-3 w-50 mx-auto">
                    <h3>Add Player</h3>
                    <div className="col">
                        <label className="form-label">Player Name:</label>
                        <input className="form-control" type="text" value={name}
                            onChange={ e => setName(e.target.value) } required />
                            {
                                errors.name ? <p className="text-danger">{ errors.name.message }</p>: ''
                            }
                    </div>
                    <div className="col mt-3">
                        <label className="form-label">Preferred Position:</label>
                        <input className="form-control" type="text" value={position}
                            onChange={ e => setPosition(e.target.value) } />
                    </div>
                    <input type="submit" className="w-25 btn btn-success mt-3" value="Add" />
                </form>
            </div>
        </div>
    );

}

export default PlayerForm;