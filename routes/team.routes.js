const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validator = require("../middlewares/validator.middleware");

router.post(
  "/:teamId/squad",
  authMiddleware.authenticateToken,
  validator.validateAddPlayerToSquad,
  teamController.addPlayerToSquad
);

module.exports = router;
