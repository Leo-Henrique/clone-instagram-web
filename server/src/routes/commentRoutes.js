import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import createComment from "../controllers/comment/createController.js";
import { getLikes, like, unlike } from "../controllers/comment/likeController.js";
import deleteComment from "../controllers/comment/deleteController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/:postId", createComment);
router.post("/likes/:commentId", like);
router.get("/likes/:commentId", getLikes);
router.delete("/likes/:commentId", unlike);
router.delete("/:postId", deleteComment);

export default router;