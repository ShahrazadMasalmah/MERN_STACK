import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const PlayerList = props => {
    const { players, setPlayers } = props;

    const removePlayer = playerId => {
        if(window.confirm("Are you sure you want to remove this player?")){
            axios.delete("http://localhost:8000/api/players/" + playerId)
                .then(res => {
                    console.log(res);
                    const updatedPlayers = players.filter(player => player._id !== playerId);
                    setPlayers(updatedPlayers);
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <div className='border border-dark w-75 mx-auto mt-5 pb-2 shadow'>
            <h3 className="mt-3 text-primary">
                <NavLink to={ "/players/list" } className="me-2">List</NavLink>
                |
                <NavLink to={ "/players/addplayer" } className="ms-2">Add Player</NavLink>
            </h3>
            <table className="table table-striped w-50 mx-auto border border-dark mt-3">
                <thead>
                    <tr>
                        <th colSpan={2} className='border border-dark'>Player Name</th>
                        <th colSpan={2} className='border border-dark'>Preferred Poition</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return (
                                <tr key={index} className="border border-dark">
                                    <td colSpan={2} className='border border-dark text-primary'>{ player.name }</td>
                                    <td colSpan={2} className='border border-dark'>{ player.preferredPosition }</td>
                                    <td><button className="btn btn-danger" onClick={ () => removePlayer(player._id) }>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default PlayerList;