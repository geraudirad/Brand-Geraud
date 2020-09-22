const articleModel = require("../models/article");
const Validator = require("../validation");

const {
	validator,
	validationErrors
} = Validator;

const getAllArticles = async (req, res) => {
    try {
		const articles = await articleModel.find()
		res.status(200).send({articles})
	} catch (error) {
		res.status(500)
		res.send({ error })
	}
};

const addNewArticle = async (req, res) => {
	try {
		const { error } = validator('article', req.body);
		if (error) {
			return validationErrors(res, error);
		}
		const article = new articleModel({
			title: req.body.title,
			content: req.body.content,
		})
		await article.save()
		res.status(201).send({article})
	}
	catch (error) {
		res.status(500)
		res.send({ error })
	}
};

const getSingleArticle = async (req, res) => {
	try {
		const article = await articleModel.findOne({ _id: req.params.id })
		res.status(200).send(article)
	} catch {
		res.status(404)
		res.send({ error: "Article doesn't exist!" })
	}
};

const updateArticle = async (req, res) => {
	try {
		const { error } = validator('article', req.body);
		if (error) {
			return validationErrors(res, error);
		}
		const post = await articleModel.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}

		await post.save()
		res.status(200).send(post)
	} catch {
		res.status(404)
		res.send({ error: "Article doesn't exist!" })
	}
};

const deleteArticle = async (req, res) => {
	try {
		await articleModel.deleteOne({ _id: req.params.id })
		res.status(204)
		res.send({ success: "Article deleted" })
	} catch {
		res.status(404)
		res.send({ error: "Article doesn't exist!" })
	} 
};

module.exports = {
    getAllArticles,
    addNewArticle,
    getSingleArticle,
    updateArticle,
    deleteArticle
}