import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { ENV } from "../helpers/genenral";
import User from "../models/user";
import { AuthRequest } from "../types/custom";

export default {
	register: async (req: Request, res: Response) => {
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
			res.status(500).json({
				message: "Can't register this user",
				success: false,
			})
		}
	},

	login: async (req: Request, res: Response) => {
		const { email, password } = req.body;
		try {
			const user = await User.findOne({ email }).select('+password').exec()
			if (!user) {
				return res.send({
					success: false,
					message: "Invalid Credentials"
				});
			}

			const validPassword = await compare(password, user.password);
			if (!validPassword) {
				return res.status(400).send({
					success: false,
					message: "Invalid password"
				});
			}

			const token = sign(
				{ _id: user._id?.toString(), email: user.email },
				ENV("JWT_SECRET"),
				{ expiresIn: '12h' }
			);

			return res.json({
				token,
				success: true,
				message: "Access Token generated"
			});
		} catch (error) {
			res.status(500).json({
				message: "Can't get user information",
				success: false,
			})
		}
	},

	profile: async (req: AuthRequest, res: Response) => {
		try {
			const user = await User.findById(req.user?._id);
			return res.json({
				data: user,
				success: true,
				message: "Profile Fetched"
			});
		} catch (error) {
			res.status(500).json({
				message: "Can't fetch user profile",
				success: false,
			})
		}
	}
}