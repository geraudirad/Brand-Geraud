const express = require("express");
const TokenHelper = require("../helpers/token");
const ArticleController = require("../controllers/article");
const router = express.Router()

const {
    verifyToken
} = TokenHelper;

const {
	getAllArticles,
	addNewArticle,
	getSingleArticle,
	updateArticle,
	deleteArticle
} = ArticleController;

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

module.exports = router