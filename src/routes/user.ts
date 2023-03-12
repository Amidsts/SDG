import express from "express";
import User from "../controllers/user.controller";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.post('/register', User.register)
router.post('/login', User.login)
router.get('/profile', authMiddleware, User.profile)

export default router