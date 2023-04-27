import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import savePost from "../controllers/saved/savePostController.js";
import createCollection from "../controllers/saved/collection/createController.js";;
import updateCollection from "../controllers/saved/collection/updateController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/only/:postId", savePost);
router.post("/collections", createCollection);
router.patch("/collections/:name", updateCollection);

export default router;
