const Joke = require("../models/jokes.model");

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke: newJoke })
        })
        .catch(error => {
            res.json(error)
        });
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => {
            res.json({ jokes: allDaJokes })
        })
        .catch(error => {
            res.json(error)
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch(error => {
            res.json(error)
        });
}

module.exports.updatingExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch(error => {
            res.json(error)
        });
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch(error => {
            res.json(error)
        });
}

module.exports.findRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
        .then(randomJoke => {
            res.json({ joke: randomJoke })
        })
        .catch(error => {
            res.json(error)
        });
}