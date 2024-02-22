const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required!"],
        minlength: [2, "Player name must be 2 characters long!"]
    },
    
    preferredPosition: {
        type: String
    },

    status: {
        type: String,
    }

}, {timestamps: true});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;