import mongoose from "mongoose";

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

const User = mongoose.model("users", UserSchema);

export default User;