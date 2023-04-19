import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { update, updatePassword } from "../controllers/userController.js";

const router = express.Router();

router.use(authMiddleware);
router.patch("/", update);
router.patch("/password", updatePassword);

export default router;