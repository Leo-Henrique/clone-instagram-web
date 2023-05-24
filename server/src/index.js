import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import database from "./database.js";
import cors from "cors";
import url from "url"
import path from "path";

const app = express();
const dirname = path.dirname(url.fileURLToPath(import.meta.url));

dotenv.config();
database();
app.use(cors({ "origin": process.env.ALLOW_ACCESS }));
app.use(express.json());
app.use("/api", routes);
app.use("/uploads", express.static(path.resolve(dirname, "..", "uploads")));
app.listen(3000);