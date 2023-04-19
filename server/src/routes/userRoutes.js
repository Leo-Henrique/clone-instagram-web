import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { update } from "../controllers/userController.js";

const router = express.Router();

router.use(authMiddleware);
router.patch("/", update);

export default router;