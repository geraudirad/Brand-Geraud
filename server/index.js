const express = require("express");
const mongoose = require("mongoose");// new
const routes = require("./routes");

mongoose
	.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true,useUnifiedTopology: true })
	.then(() => {
		const app = express();
		app.use(express.json()); // new
		app.use("/api/", routes);

		app.listen(5000, () => {
			console.log("Server has started!");
		});
	})