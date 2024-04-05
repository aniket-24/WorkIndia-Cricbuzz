const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validator = require("../middlewares/validator.middleware");

router.post("/signup", validator.validateSignup, authController.signup);
router.post("/login", validator.validateLogin, authController.login);

module.exports = router;
