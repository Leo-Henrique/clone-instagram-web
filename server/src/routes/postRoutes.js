import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import createPost from "../controllers/post/createController.js";
import updatePost from "../controllers/post/updateController.js";
import { getPost, getPosts } from "../controllers/post/readController.js";

const router = express.Router();

router.get("/:postId", getPost);
router.get("/", getPosts);

router.use(authMiddleware);

router.post("/", createPost);
router.patch("/:postId", updatePost);

export default router;