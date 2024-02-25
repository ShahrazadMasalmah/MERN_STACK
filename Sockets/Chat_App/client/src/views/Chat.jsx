import React, { useEffect, useRef, useState } from "react";
import ChatMessages from "../components/ChatMessages";
import ChatForm from "../components/ChatForm";

const Chat = props => {
    const { socket, handleCloseChat } = props;
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState("");
    // A reference object (created using useRef) that points to the chat messages container element.
    const messageRef = useRef(null);

    useEffect( () => {
        // It checks if messageRef.current exists (i.e., the element has been rendered).
        // If it exists, it smoothly scrolls the message container to the bottom using scrollIntoView. 
        // This ensures the latest messages are always visible.
        messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect( () => {
        // "message_response": This event triggers when a new message is received.
        // The received data is added to the messages state, updating the displayed messages.
        socket.on("message_response", data => setMessages([...messages, data]));
        // "chatHistory": This event likely sends the entire chat history when a user joins the room.
        // The received data replaces the existing messages state, setting the initial chat content.
        socket.on("chatHistory", data => setMessages(data));
    }, [socket, messages]);

    useEffect( () => {
        // This event triggers when another user starts typing. The received data (indicating the typing user) 
        // is set to the typing state, allowing the chat interface to display the "typing..." notification.
        socket.on("type_response", data => setTyping(data));
    }, [socket]);

    return(
        <div>
            {/* This suggests that the ChatMessages component likely handles displaying messages,
            handling user input, and potentially sending messages to the server through the 
            provided socket object. */}
            <ChatMessages socket={ socket }
            handleCloseChat={ handleCloseChat }
            messages={ messages }
            messageRef={ messageRef }
            typing={ typing } />
        </div>
    );
}

export default Chat;