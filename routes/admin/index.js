const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const pet = require("../../models/pet");

router.get("/ListPosts/:userId", require("../admin/listPosts"));
router.get("/ListUsers/:userId", require("../admin/listUsers"));

module.exports = router;
