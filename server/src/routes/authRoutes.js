import express from "express";
import signUp from "../controllers/auth/signUpController.js";
import signIn from "../controllers/auth/signInController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;