const Player = require("../models/player.model");

// create a player document in the database
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.status(400).json(err))
}

// retrieve all players from the database
module.exports.findAllPlayers = (req, res) => {
    Player.find({})
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err))
}

// retrieve one player from the database
module.exports.getExistingPlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.json(err))
}

// update the player fields in the players collection
module.exports.UpdateExistingPlayer = (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({errors: {name: "Player name is required!"}});
    }
    if(name && name.length < 2){
        return res.status(400).json({errors: {name: "Player name must be at least 2 characters long!"}});
    }
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err))
}

// delete one player by its id from the players collection
module.exports.deleteExistingPlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}