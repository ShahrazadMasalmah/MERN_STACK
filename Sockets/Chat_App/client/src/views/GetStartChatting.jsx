import React, { useState } from "react";

const GetStartChatting = props => {
    const { socket, handleGetStarting } = props;
    const [userName, setUserName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        socket.emit("newUser", { userName, socketID: socket.id });
        handleGetStarting(userName);
    }

    return(
        <div className="border border-dark pt-3 pb-5 mx-auto mt-5">
            <h2 className="text-center">Get started right now!</h2>
            <form onSubmit={ handleSubmit } className="start-form ps-5 mx-auto mt-5">
            <p>I want to start chatting with the name...</p>
                <div className="row">
                    <div className="col-sm-6 col-md-8">
                        <input className="form-control" type="text" value={userName} 
                        onChange={ e => setUserName(e.target.value) }
                        placeholder="My name..." />
                    </div> 
                    <div className="col-6 col-md-4">
                        <input className="btn btn-success" type="submit" value="Start Chatting" />
                    </div>   
                </div>
            </form>
        </div>
    );

}

export default GetStartChatting;