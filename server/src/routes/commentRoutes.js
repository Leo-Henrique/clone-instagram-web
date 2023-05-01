import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import createComment from "../controllers/comment/createController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/:postId", createComment);

export default router;