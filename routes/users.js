const express = require("express");
const db = require("../database/db");
const userController = require("../controllers/user_controller");
const router = express.Router();
const { upload } = require("../middleware/upload_single_file");


router.get("/", userController.getAllUsers);
router.post("/", upload.single("personal_image"), userController.newUser);
router.get("/:userId", userController.getOneUser);
router.put("/:userId",upload.single('personal_image'), userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
