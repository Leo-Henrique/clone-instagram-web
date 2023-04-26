import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import savePost from "../controllers/saved/savedController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/:postId", savePost);

export default router;
