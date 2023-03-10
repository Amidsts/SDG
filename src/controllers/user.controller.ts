import { Request, Response } from "express";
import logger from "../helpers/logger";
import User from "../models/user";

const register = async (req: Request, res: Response) => {
	const { firstname, lastname, email, phone, password, userType } = req.body;
	const user = new User({
		firstname, lastname,
		email, phone,
		password, userType
	});
	try {
		await user.save();
		res.json({
			data: user,
			message: "User registration successfull",
			success: true,
		})
	} catch (error) {
		logger.error(error)
		res.status(500).json({
			message: "Can't register this user",
			success: false,
		})
	}

}

export default { register };