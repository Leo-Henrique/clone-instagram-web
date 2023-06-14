import mongoose from "mongoose";
import Post from "./postModel.js";

const schema = {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
};

const CommentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    ...schema,
    replies: [new mongoose.Schema(schema)],
});

CommentSchema.pre(["findOneAndDelete", "deleteMany"], async function (next) {
    const comments = await Comment.find(this._conditions);

    comments.forEach(async comment => {
        await Post.findByIdAndUpdate(comment.post, {
            $pull: { comments: comment.id },
        });
    });
    next();
});

const Comment = mongoose.model("comments", CommentSchema);

export default Comment;
