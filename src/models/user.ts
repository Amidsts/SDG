import { Document, model, Schema } from "mongoose";
import { genSalt, hash } from "bcrypt";

export interface IUser extends Document {
    firstname: string,
    lastname: string,
    userType: "tenant" | "landlord",
    phone: string,
    email: string,
    password: string
}

const userSchema = new Schema<IUser>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
});

userSchema.pre("save", async function (next) {
    let { password, email } = this;
    const salt = await genSalt(10);
    const hashed = await hash(password, salt);
    this.password = hashed;
    this.email = email.toLowerCase();
    next();
})

const User = model<IUser>('User', userSchema);

export default User;