const express = require("express");
const router = express.Router();
const pet = require("../../models/pet");
const petAdoption = require("../../models/adoption.js");

router.get("/getTPets", require("./getTPets"));
router.post("/addpetsaddoption/:userId", require("./adoption"));

module.exports = router;
