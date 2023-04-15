import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import connectToDB from "./database/connect.js";

const app = express();

dotenv.config();
connectToDB();
app.use(express.json());
app.use("/api", routes);
app.listen(3000);
