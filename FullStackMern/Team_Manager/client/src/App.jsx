import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import PlayerList from './views/PlayerList';
import PlayerForm from './views/PlayerForm';
import PlayerStatus from './views/PlayerStatus';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:8000/api/players")
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err))
  }, [players])

  return (
    <div>
        <h1 className='text-primary'>
          <NavLink to={ "/players/list" } className="me-2">Manage Players</NavLink>
          |
          <NavLink to={ "/players/status/game/1" } className="ms-2">Manage Player Status</NavLink>
        </h1>
        <Routes>
          <Route path='/players/list' element={ <PlayerList players={players} setPlayers={setPlayers} /> } />
          <Route path='/players/addplayer' element={ <PlayerForm /> } />
          <Route path='/players/status/game/:num' element={ <PlayerStatus players={players} /> } />
          <Route path='/' element={ <Navigate to={ '/players/list' }/> } />
        </Routes>
    </div>
  )
}

export default App
