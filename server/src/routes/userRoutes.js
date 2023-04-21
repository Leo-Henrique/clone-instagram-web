import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
    updateInfos,
    updatePassword,
} from "../controllers/user/updateController.js";
import { follow, unfollow } from "../controllers/user/followController.js";
import deleteUser from "../controllers/user/deleteController.js";
import { getUser, getUsers } from "../controllers/user/readController.js";
import { deleteProfilePicture, newProfilePicture } from "../controllers/user/pictureController.js";

const router = express.Router();

router.get("/:username", getUser);

router.use(authMiddleware);

router.post("/picture", newProfilePicture);
router.delete("/picture", deleteProfilePicture);
router.post("/follow", follow);
router.delete("/unfollow", unfollow);
router.patch("/", updateInfos);
router.patch("/password", updatePassword);
router.delete("/", deleteUser);
router.get("/", getUsers);

export default router;
