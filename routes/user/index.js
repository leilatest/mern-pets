const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const pet = require("../../models/pet");

router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.post("/addpets/:userId", require("./addPets"));

router.get("/:id", require("./getOwnProfile"));
router.get("/pets/:userId", require("./getPets"));

router.put("/updatePet/:id", require("./updatePet"));

router.delete("/deletePet/:id", require("./deletePet"));

module.exports = router;
