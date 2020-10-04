import express from "express"
import mongoose from "mongoose"
import routes from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app = express();
mongoose
	.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true,useUnifiedTopology: true })
	.then(() => {
		app.use(express.json()); // new
		app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
		app.use("/api/", routes);

		app.listen(5000, () => {
			console.log("Server has started!");
		});
	})
export default app;