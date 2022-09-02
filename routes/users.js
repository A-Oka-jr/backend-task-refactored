const express = require("express");
const db = require("../database/db");
const userController = require("../controllers/user_controller");
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-'  + file.originalname
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter:fileFilter
})
// Get all users
router.get("/", userController.getAllUsers);
router.post("/", upload.single('personal_image'), userController.newUser);
router.get("/:userId", userController.getOneUser);
router.put("/:userId",upload.single('personal_image'), userController.updateUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
