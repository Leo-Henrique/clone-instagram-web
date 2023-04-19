import express from "express";
import auth from "./authRoutes.js";
import users from "./userRoutes.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);

export default router;