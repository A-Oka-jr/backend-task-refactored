const express = require("express");
const router = express.Router();

const usersRoute = require("./users",);
const postsRoute = require("./posts");

router.use("/api/users", usersRoute);
router.use("/api/posts", postsRoute);


module.exports = router;
