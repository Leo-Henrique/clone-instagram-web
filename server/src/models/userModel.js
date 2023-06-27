import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Post from "./postModel.js";
import Saved from "./savedModel.js";
import Comment from "./commentModel.js";

export const defaultPicture = "uploads/default/user-picture.jpg";

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
        default: false,
    },
    bio: {
        type: String,
        trim: true,
    },
    picture: {
        type: String,
        default: defaultPicture,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
    hasPosts: {
        type: Boolean,
        default: false,
    },
    hasContentInFeed: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
    if (this.password) {
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    } else next();
});

UserSchema.pre("findOneAndDelete", async function (next) {
    const userId = this._conditions._id;
    const user = await User.findById(userId);
    const referencedUsers = [...user.followers, ...user.following];

    await User.updateMany(
        { _id: { $in: referencedUsers } },
        {
            $pull: { followers: userId, following: userId },
        }
    );
    await Post.deleteMany({ user: userId });
    await Post.updateMany({ likes: userId }, { $pull: { likes: userId } });
    await Saved.deleteOne({ user: userId });
    await Comment.deleteMany({ user: userId });

    const comments = await Comment.find();

    comments.forEach(comment => {
        comment.likes = comment.likes.filter(id => id.toString() !== userId);
        comment.replies = comment.replies.filter(
            ({ user }) => user.toString() !== userId
        );
        comment.replies.forEach(reply => {
            reply.likes = reply.likes.filter(user => user.toString() !== userId);
        });

        comment.save();
    });
    next();
});

const User = mongoose.model("users", UserSchema);

export default User;
