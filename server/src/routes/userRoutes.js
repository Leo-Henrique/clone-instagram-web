import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
    updateInfos,
    updatePassword,
} from "../controllers/user/updateController.js";
import {
    follow,
    getFriends,
    unfollow,
} from "../controllers/user/followController.js";
import deleteUser from "../controllers/user/deleteController.js";
import { getUser, getUsers } from "../controllers/user/readController.js";
import {
    deleteProfilePicture,
    newProfilePicture,
} from "../controllers/user/pictureController.js";

const router = express.Router();

router.get("/:username", getUser);

router.use(authMiddleware);

router.post("/picture", newProfilePicture);
router.post("/follow/:instagramUserId", follow);
router.patch("/", updateInfos);
router.patch("/password", updatePassword);
router.get("/", getUsers);
router.get("/:username/:friends", getFriends);
router.delete("/picture", deleteProfilePicture);
router.delete("/unfollow/:instagramUserId", unfollow);
router.delete("/", deleteUser);

export default router;
