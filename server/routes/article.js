import express from "express";
import {
    verifyToken
} from "../helpers/token";
import {
	getAllArticles,
	addNewArticle,
	getSingleArticle,
	updateArticle,
	deleteArticle
} from "../controllers/article";
const router = express.Router()

// Get all articles
router.get("/", getAllArticles)

// Add new article
router.post("/", verifyToken, addNewArticle)
	
// Get single article
router.get("/:id", getSingleArticle)

// Update article
router.patch("/:id", verifyToken, updateArticle)

// Delete article
router.delete("/:id", verifyToken, deleteArticle)

export default router