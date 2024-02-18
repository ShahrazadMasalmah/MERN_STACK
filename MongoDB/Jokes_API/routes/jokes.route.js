const jokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", jokeController.findAllJokes);
    app.get("/api/jokes/random", jokeController.findRandomJoke);
    app.get("/api/jokes/:id", jokeController.findOneSingleJoke);
    app.post("/api/jokes", jokeController.createNewJoke);
    app.patch("/api/jokes/:id", jokeController.updatingExistingJoke);
    app.delete("/api/jokes/:id", jokeController.deleteExistingJoke);
}