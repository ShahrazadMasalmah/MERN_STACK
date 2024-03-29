import React, { useState } from "react";

const ChatForm = props => {
    const { socket } = props;
    // message: This string represents the user's currently typed message.
    const [message, setMessage] = useState("");

    // The handleSendMessage function is triggered when the form is submitted.
    // It checks if the message is not empty (trimmed) and if a username exists in local storage.
    const handleSendMessage = e => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem("userName")){
            // The emitted event is named "message".
            // The data sent with the event includes:
            // text: The typed message content.
            // name: The user's username retrieved from local storage.
            // id: A unique identifier for the message generated by combining the socket ID and a random value.
            // socketID: The socket ID associated with the user.
            socket.emit("message", {
                text: message,
                name: localStorage.getItem("userName"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
            console.log({
                text: message,
                name: localStorage.getItem("userName"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage("");
    };

    // The handleTyping function is triggered whenever the user starts typing in the chat form.
    const handleTyping = () => {
        socket.emit("typing", localStorage.getItem("userName") + " is typing");
    }

    return(
        <div className="pb-4">
            <form onSubmit={ handleSendMessage } className="start-form ps-5 mx-auto mt-5">
                <div className="row">
                    <div className="col-sm-6 col-md-8">
                        <textarea className="form-control" value={message} 
                        onChange={ e => setMessage(e.target.value) }
                        onKeyDown={ handleTyping }
                        rows={ 1 } />
                    </div> 
                    <div className="col-6 col-md-4">
                        <input className="btn btn-primary" type="submit" value="Send" />
                    </div>   
                </div>
            </form>
        </div>
    );

}

export default ChatForm;