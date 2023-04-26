import mongoose from "mongoose";

const PostsSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: true,
    },
    albums: [String],
}, { _id: false });

const SavedSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    posts: [PostsSchema],
    albums: [String],
});

const Saved = mongoose.model("saved", SavedSchema);

export default Saved;