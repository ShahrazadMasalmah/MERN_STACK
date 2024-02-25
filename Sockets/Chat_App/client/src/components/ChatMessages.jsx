import React from "react";
import ChatForm from "./ChatForm";

const ChatMessages = props => {
    // socket: A Socket.IO object for real-time communication with the server.
    // handleCloseChat: A function to handle leaving the chat room.
    // messages: An array of messages to display.
    // messageref: A reference object to manipulate the chat message container.
    // typing: The name of the user currently typing (if any).
    const { socket, handleCloseChat, messages, messageref, typing } = props;

    // The leaveTheChat function is called when the "Leave Chat" button is clicked.
It  // removes the user's name from local storage and calls handleCloseChat to initiate leaving the chat.
    function leaveTheChat() {
        localStorage.removeItem("userName");
        handleCloseChat();
    }

    return(
        // This component primarily renders the chat interface, displaying
        //  received messages with styling to differentiate between the user's messages and others.
        <div className="border border-dark mt-5 pt-3 px-3">
            <header>
                <button className="btn btn-danger"  onClick={ leaveTheChat }>Leave Chat</button>
            </header>
            <div>
                {
                    messages.map((message, index) => {
                        return ( message.name == localStorage.getItem("userName") ? (
                            <div className="d-flex justify-content-end" key={index}>
                                <div className="border border-dark p-2 mt-3"
                                style={{ backgroundColor: "#9fc5f8", 
                                borderRadius: "10px", width: "45%" }} >
                                    <p>You</p>
                                    <div>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            </div>
                            
                        ) : (
                            <div className="d-flex justify-content-start" key={index}>
                                <div className="border border-dark p-2 mt-3"
                                style={{ backgroundColor: "#dddddd", 
                                borderRadius: "10px", width: "45%" }} >
                                    <p>{message.name}</p>
                                    <div>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    })
                }
            </div>
            <div>
                <p>{ typing } ...</p>
            </div>
            <div ref={ messageref } />

            <ChatForm socket={ socket } />
        </div>
    );

}

export default ChatMessages;