const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const validator = require("../middlewares/validator.middleware");

router.post("/signup", validator.validateSignup, adminController.signup);
router.post("/login", validator.validateLogin, adminController.login);

module.exports = router;
