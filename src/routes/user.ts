import express from "express";
import User from "../controllers/user.controller";

const router = express.Router();

router.post('/register', User.register)

export default router