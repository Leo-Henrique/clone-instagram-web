import express from "express";
import signUp from "../controllers/auth/signUpController.js";
import signIn from "../controllers/auth/signInController.js";
import forgotPassword from "../controllers/auth/forgotPassController.js";
import resetPassword from "../controllers/auth/resetPassController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/forgot_password", forgotPassword);
router.post("/reset_password", resetPassword);

export default router;