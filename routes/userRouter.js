const express = require("express");
const router = express.Router();

const { userInput, userAge, userFbw, validateUser } = require("../midleware/validation");

router.route("/").post(userInput, userAge, userFbw, validateUser);

module.exports = router;
