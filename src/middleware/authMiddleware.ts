import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ENV } from "../helpers/genenral";
import { AuthRequest, AuthUser } from "../types/custom";

export default async (req: AuthRequest, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(400).json({
			success: false,
			message: "Authorization token not found"
		});
	}

	try {
		const decoded = await <AuthUser>verify(authorization.split(" ")[1], ENV("JWT_SECRET"))
		req.user = decoded;
		next();
	} catch (error) {
		res.status(401).json({
			success: false,
			message: "Invalid Token"
		});
	}
}