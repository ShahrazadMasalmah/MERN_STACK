const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

let users = [];
let chatHistory = [];


const server = app.listen(8000, () => {
    console.log("The server is all fired up on port 8000");
});

// To initialize the socket, we need to invoke the socket.io library and pass it our Express server
const io = require("socket.io")(server, { cors: true });

// It allows users to connect, send messages, receive chat history, 
//see notifications when others are typing, and be notified when users join or leave the chat.
io.on("connection", socket => {
    console.log(socket.id + " user just connected!");

    // Sends the existing chat history to the newly connected user.
    socket.emit("Chat_History", chatHistory);

    // Listens for the message event emitted by users.
    socket.on("message", data => {
        chatHistory.push(data);
        // Broadcasts the received message to all connected clients, effectively sending it to the chat.
        io.emit("message_response", data);
        })

     // Listens for the newUser event emitted by users when a new user joins the chat
    socket.on("newUser", data => {
        users.push(data);
        // Sends the existing chat history to the new user.
        socket.emit("Chat_History", chatHistory);
        // Broadcasts the updated list of users to all connected users,
        // informing them about the new user's arrival.
        io.emit("user_response", users);
        })

    //  Listens for the typing event emitted by users when a user starts typing a message
    socket.on("typing", data => {
        // Broadcasts the typing event to all connected users except the sender,
        // indicating that someone is typing.
        socket.broadcast.emit("type_response", data);
    })

    // Listens for the disconnect event emitted by users when they leave the chat
    socket.on("disconnect", () => {
        console.log(socket.id + " user disconnected.");
        users = users.filter(user => user.socketID !== socket.id);
        // Broadcasts the updated list of users to all connected users,
        // informing them about the user's departure
        io.emit("user_response", users);

        socket.disconnect();
    })
});