import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import savePost from "../controllers/saved/saveController.js";
import createCollection from "../controllers/saved/createController.js";
import updateCollection from "../controllers/saved/updateController.js";
import { getCollections, getCollection } from "../controllers/saved/readController.js";
import { deleteCollection, deleteCollections, deleteSave } from "../controllers/saved/deleteController.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/:postId", savePost);
router.post("/", createCollection);
router.patch("/", updateCollection);
router.get("/", getCollections);
router.get("/:collection", getCollection);
router.delete("/:postId", deleteSave);
router.delete("/collections/:collection", deleteCollection);
router.delete("/", deleteCollections);

export default router;
