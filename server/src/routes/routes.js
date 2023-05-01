import express from "express";
import auth from "./authRoutes.js";
import users from "./userRoutes.js";
import posts from "./postRoutes.js";
import saved from "./savedRoutes.js";
import comments from "./commentRoutes.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/posts", posts);
router.use("/saved", saved);
router.use("/comments", comments);

export default router;