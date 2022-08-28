const express = require("express");
const db = require("../database/db");
const postController = require("../controllers/postController");
const router = express.Router();



// Get all users
router.get("/", postController.get_All);
router.post("/", postController.create_post);

module.exports = router;
