import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
    updateInfos,
    updatePassword,
} from "../controllers/user/updateController.js";
import { follow, unfollow } from "../controllers/user/followController.js";

const router = express.Router();

router.use(authMiddleware);
router.patch("/", updateInfos);
router.patch("/password", updatePassword);
router.post("/follow", follow);
router.delete("/unfollow", unfollow);

export default router;
