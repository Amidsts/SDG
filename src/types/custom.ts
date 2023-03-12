import { Request } from "express"

export type AuthUser = {
	_id: string,
	email: string
}

export interface AuthRequest extends Request {
	user?: AuthUser
}