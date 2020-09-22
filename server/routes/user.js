const express = require("express")
const userController = require("../controllers/user")
const router = express.Router()

const {
	getAllUsers,
	addNewUser,
	login
} = userController;


// Get all users
router.get("/", getAllUsers)

// Add new user
router.post("/", addNewUser)

// Get all users
router.post("/login", login)

module.exports = router