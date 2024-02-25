import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './views/Chat';
import Header from './components/Header';
import GetStartChatting from './views/GetStartChatting';

function App() {
  // This state stores the connection object created using io.connect,
  // connecting to a server at "http://localhost:8000".
  const [socket] = useState( () => io.connect("http://localhost:8000"));
  // This state indicates whether a user has entered their name and is currently in the chat room (initially false)
  const [isThereUser, setIsThereUser] = useState(false);

  // It checks if a "userName" key exists in the browser's local storage.
  // If a username is found, it sets the isThereUser state to true, indicating an existing user.
  useEffect( () => {
    const user = localStorage.getItem("userName");
    if(user !== null){
      setIsThereUser(true);
    }
  }, []);

  // The handleGetStarting function takes a userName as an argument.
  // It stores the username in local storage using localStorage.setItem.
  // It then sets the isThereUser state to true, allowing the user to enter the chat room.
  const handleGetStarting = userName => {
    localStorage.setItem("userName", userName);
    setIsThereUser(true);
  }

  // The handleCloseChat function sets the isThereUser state to false, effectively removing the user from the chat room.
  const handleCloseChat = () => {
    setIsThereUser(false);
  }


  return (
    <>
      <Header />
      {
        isThereUser ?
        // the Chat component is rendered. This component likely displays the chat 
        // interface, messages, and communication with other users through the provided socket object.
        <Chat socket={ socket } handleCloseChat={ handleCloseChat } /> :
        // the GetStartChatting component is rendered. This component likely serves as 
        // a starting point, allowing users to enter their name and join the chat room using the handleGetStarting function.
        <GetStartChatting socket={ socket } handleGetStarting={ handleGetStarting } />
      }
      
    </>
  )
}

export default App
