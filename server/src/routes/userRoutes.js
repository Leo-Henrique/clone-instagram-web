import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
    updateInfos,
    updatePassword,
} from "../controllers/user/updateController.js";
import { follow, unfollow } from "../controllers/user/followController.js";
import deleteUser from "../controllers/user/deleteController.js";
import { getUser, getUsers } from "../controllers/user/readController.js";

const router = express.Router();

router.get("/:username", getUser);

router.use(authMiddleware);

router.get("/", getUsers);
router.patch("/", updateInfos);
router.patch("/password", updatePassword);
router.post("/follow", follow);
router.delete("/unfollow", unfollow);
router.delete("/", deleteUser);

export default router;
