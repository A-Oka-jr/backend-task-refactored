const express = require("express");
const db = require("../database/db");
const postController = require("../controllers/post_controller");
const router = express.Router();



// Get all users
router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);

module.exports = router;
