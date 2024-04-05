const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player.controller");

router.get("/:playerId/stats", playerController.getPlayerStats);

module.exports = router;
