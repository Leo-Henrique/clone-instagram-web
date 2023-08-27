import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";
import url from "url";
import database from "./database.js";
import { tmpPath } from "./modules/multer/storage.js";
import routes from "./routes/routes.js";

const app = express();
const dirname = path.dirname(url.fileURLToPath(import.meta.url));

database();
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(`/${tmpPath}`, express.static(path.resolve(dirname, "..", tmpPath)));
app.listen(process.env.SERVER_PORT);
