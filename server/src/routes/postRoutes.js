import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import createPost from "../controllers/post/createController.js";
import updatePost from "../controllers/post/updateController.js";
import { getPosts } from "../controllers/post/readController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/", createPost);
router.patch("/:postId", updatePost);
router.get("/", getPosts);

export default router;