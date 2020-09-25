import express from "express"
import {
	getAllUsers,
	addNewUser,
	login
} from "../controllers/user"
const router = express.Router()

// Get all users
router.get("/", getAllUsers)

// Add new user
router.post("/", addNewUser)

// Get all users
router.post("/login", login)

export default router