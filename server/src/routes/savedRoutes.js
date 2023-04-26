import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import savePost from "../controllers/saved/savePostController.js";
import { createCollection } from "../controllers/saved/collectionController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/only/:postId", savePost);
router.post("/collection", createCollection);

export default router;
