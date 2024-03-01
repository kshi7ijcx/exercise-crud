import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", () => {});

router.post("/signup", () => {});

export default router;