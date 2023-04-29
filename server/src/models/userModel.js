import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export const defaultPicture = "uploads/default/user-picture.jpeg";

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
        select: false,
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
    verified: {
        type: Boolean,
        default: false
    },
    bio: {
        type: String,
        trim: true,
    },
    picture: {
        type: String,
        default: defaultPicture
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }]
});

UserSchema.pre("save", async function(next) {
    if (this.password) {
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    } else next();
});

const User = mongoose.model("users", UserSchema);

export default User;