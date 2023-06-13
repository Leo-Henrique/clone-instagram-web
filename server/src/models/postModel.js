import mongoose from "mongoose";
import Comment from "./commentModel.js";
import Saved from "./savedModel.js";

const MediaSchema = new mongoose.Schema({
    type: {
        type: "String",
        required: true
    },
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
        ref: "comments"
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

PostSchema.pre(["findOneAndDelete", "deleteMany"], async function(next) {
    const posts = await Post.find(this._conditions);
    const usersSaves = await Saved.find();

    usersSaves.forEach(async saved => {
        if (saved) {
            saved.albums.forEach(({ posts: albumPosts }) => {
                posts.forEach(post => {
                    const postIndex = albumPosts.findIndex(albumPost =>
                        albumPost.post.toString() === post.id
                    );
    
                    if (postIndex !== -1) albumPosts.splice(postIndex, 1);
                })
            });
    
            await saved.save();
            if (!saved.albums.length) await Saved.findByIdAndDelete(saved.id);
        }
    });
    posts.forEach(async post => {
        await Comment.deleteMany({ _id: { $in: post.comments } });
    });
    
    next();
});

const Post = mongoose.model("posts", PostSchema);

export default Post;