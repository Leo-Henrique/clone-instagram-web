import mongoose from "mongoose";

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
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
}

const CommentSchema = new mongoose.Schema({ 
    ...schema,
    replies: [new mongoose.Schema(schema)]
});

const Comment = mongoose.model("comments", CommentSchema);

export default Comment;