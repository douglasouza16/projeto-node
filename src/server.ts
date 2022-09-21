import express from "express";
import swaggerUi from "swagger-ui-express";
import swiggerFile from "./swagger.json";
import { router } from "./routes";

import "./database";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup());

app.use(router);


app.listen(3333, () => console.log("Server is running"));