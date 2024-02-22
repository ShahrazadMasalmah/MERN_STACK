const PlayerController = require("../controllers/player.controller");

module.exports = function(app) {
    app.get("/api/players", PlayerController.findAllPlayers);
    app.post("/api/players", PlayerController.createPlayer);
    app.get("/api/players/:id", PlayerController.getExistingPlayer);
    app.patch("/api/players/:id", PlayerController.UpdateExistingPlayer);
    app.put("/api/players/:id", PlayerController.UpdateExistingPlayer);
    app.delete("/api/players/:id", PlayerController.deleteExistingPlayer);
}