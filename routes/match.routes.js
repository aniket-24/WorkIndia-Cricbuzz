const express = require("express");
const router = express.Router();
const matchController = require("../controllers/match.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validator = require("../middlewares/validator.middleware");

router.post(
  "/",
  authMiddleware.authenticateToken,
  validator.validateCreateMatch,
  matchController.createMatch
);
router.get("/", matchController.getMatches);
router.get("/:matchId", matchController.getMatchDetails);

module.exports = router;
