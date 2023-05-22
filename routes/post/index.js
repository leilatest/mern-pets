const express = require("express");
const router = express.Router();
const post = require("../../models/post");
const user = require("../../models/user");

router.post("/addPost/:userId", require("./addPost"));
router.get("/getPost/:userId", require("./getPost"));
router.get("/posts", require("./posts"));

router.put("/updatePost/:id", require("./updatePost"));
router.delete("/deletePost/:id", require("./deletePost"));

module.exports = router;
