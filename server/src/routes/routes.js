import express from "express";
import auth from "./authRoutes.js";
import users from "./userRoutes.js";
import posts from "./postRoutes.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/posts", posts);

export default router;