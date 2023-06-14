import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import createPost from "../controllers/post/createController.js";
import updatePost from "../controllers/post/updateController.js";
import { getPost, getPosts } from "../controllers/post/readController.js";
import deletePost from "../controllers/post/deleteController.js";
import { getLikes, like, unlike } from "../controllers/post/likeController.js";

const router = express.Router();

router.get("/:postId", getPost);
router.get("/", getPosts);

router.use(authMiddleware);

router.post("/", createPost);
router.post("/likes/:postId", like);
router.get("/likes/:postId", getLikes);
router.patch("/:postId", updatePost);
router.delete("/:postId", deletePost);
router.delete("/likes/:postId", unlike);

export default router;
