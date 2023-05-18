import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import database from "./database.js";
import cors from "cors";

const app = express();

dotenv.config();
database();
app.use(cors({ origin: process.env.ALLOW_ACCESS }));
app.use(express.json());
app.use("/api", routes);
app.listen(3000);