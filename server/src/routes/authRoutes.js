import express from "express";
import signUp from "../controllers/auth/signUpController.js";
import signIn from "../controllers/auth/signInController.js";
import forgotPassword from "../controllers/auth/forgotPassController.js";
import resetPassword from "../controllers/auth/resetPassController.js";
import getAuthenticatedUser from "../controllers/auth/readController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/forgot_password", forgotPassword);
router.post("/reset_password", resetPassword);
router.get("/", auth, getAuthenticatedUser);

export default router;