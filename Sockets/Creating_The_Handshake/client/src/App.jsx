import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './components/Chat';

function App() {
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState( () => io(":8000"));
  const [message, setMessage] = useState("");

  useEffect( () => {
    // we need to set up all of our event listeners in the useEffect callback function
    console.log("Is this running?");
    socket.on("event", data =>{
      console.log(data);
      setMessage(data);
      });

    // this ensures that the underlying socket will be closed if App is unmounted
    return () => socket.removeAllListeners;

  }, [socket])

  return (
    <>
      <Chat message={ message } /> 
    </>
  )
}

export default App
