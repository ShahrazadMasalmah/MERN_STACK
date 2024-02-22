import React, { useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const PlayerStatus = props => {
    const { players } = props;
    const { num } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        if(num > 3){
                navigate("/players/status/game/1");
            }
    }, [])

    
    const handleStatusChange = (playerId, playerName, Position, state) => {
        console.log(state);
        axios.put("http://localhost:8000/api/players/" + playerId, {
            name: playerName,
            preferredPosition: Position,
            status: state
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div className="border border-dark w-75 mx-auto mt-5 shadow">
            <h2 className="mt-3">Player Status - Game {num}</h2>
            <h4 className="text-primary">
                <NavLink to={ "/players/status/game/1" } className="me-2">Game 1</NavLink>
                |
                <NavLink to={ "/players/status/game/2" } className="mx-2">Game 2</NavLink>
                |
                <NavLink to={ "/players/status/game/3" } className="ms-2">Game 3</NavLink>
            </h4>
            <table className="table table-striped w-75 mx-auto border border-dark my-3">
                <thead>
                    <tr>
                        <th colSpan={1} className='border border-dark'>Player Name</th>
                        <th colSpan={3} className='border border-dark'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return (
                                <tr key={index} className="border border-dark">
                                    <td className='border border-dark text-primary'>{ player.name }</td>
                                    {
                                        player.status == "Playing" ?
                                        <td><button className="btn btn-success">Playing</button></td> :
                                        <td><button onClick={ (e) => {handleStatusChange(player._id, player.name, player.preferredPosition, "Playing")} }>Playing</button></td>
                                    }

                                    {
                                        player.status == "Not Playing" ?
                                        <td><button className="btn btn-danger">Not Playing</button></td> :
                                        <td><button onClick={ (e) => {handleStatusChange(player._id, player.name, player.preferredPosition, "Not Playing")} }>Not Playing</button></td>
                                    }

                                    {
                                        player.status == "Undecided" ?
                                        <td><button className="btn btn-warning">Undecided</button></td> :
                                        <td><button onClick={ (e) => {handleStatusChange(player._id, player.name, player.preferredPosition, "Undecided")} }>Undecided</button></td>
                                    }
                                    {/* {console.log(player.status)} */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default PlayerStatus;