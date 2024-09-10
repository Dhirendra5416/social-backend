import express from "express";
import upload from '../config/multer.js';
import { login,register,logout } from "../controllers/auth.js";

const router = express.Router()

router.post("/login",login);
router.post("/register",upload.single('file'),register);
router.post("/logout",logout);


export default router;