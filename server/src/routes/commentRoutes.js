import express from "express";
import createComment from "../controllers/comment/createController.js";
import deleteComment from "../controllers/comment/deleteController.js";
import { getLikes, like, unlike } from "../controllers/comment/likeController.js";
import getComments from "../controllers/comment/readController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:postId", getComments);

router.use(authMiddleware);

router.post("/:postId", createComment);
router.post("/likes/:commentId", like);
router.get("/likes/:commentId", getLikes);
router.delete("/likes/:commentId", unlike);
router.delete("/:commentId", deleteComment);

export default router;
