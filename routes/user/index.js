const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const pharmacy = require("../../models/pet");

router.post("/register", require("./register"));
router.post("/login", require("./login"));

module.exports = router;
