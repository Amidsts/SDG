import {Document} from "mongoose";

interface IUser extends Document {
    firstName: string,
    lastName: string,
    userType: "student" | "landlord",
    phoneNo: string,
    email: string,
    password: string
}