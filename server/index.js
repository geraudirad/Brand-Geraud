import express from "express"
import mongoose from "mongoose"
import ENV from "dotenv";
import routes from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app = express();
ENV.config();

mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true })
	.then(() => {
		app.use(express.json()); // new
		app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
		app.use("/api/", routes);

		app.listen(process.env.PORT, () => {
			console.log(`Server has started! Running on ${process.env.PORT}`);
		});
	})
export default app;