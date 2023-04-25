import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    persons: [new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        offsetX: Number,
        offsetY: Number,
    }, { _id: false })]
}, { _id: false });

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    media: [MediaSchema],
    legend: {
        type: String,
        default: "",
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
    }],
    showLikes: {
        type: Boolean,
        default: true,
    },
    showComments: {
        type: Boolean,
        default: true,
    },
    isReel: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Post = mongoose.model("posts", PostSchema);

export default Post;