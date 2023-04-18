import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    passwordResetToken: {
        type: String,
        select: false,
    },
    passwordResetTokenExpiration: {
        type: Number,
        select: false,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    }
});

UserSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
});

const User = mongoose.model("users", UserSchema);

export default User;