import mongoose from "mongoose";

const SavedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    albums: [new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        posts: [new mongoose.Schema({
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "posts",
                required: true,
            },
            addedAt: {
                type: Date,
                default: Date.now(),
            }
        }, { _id: false })],
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    }, { _id: false })],
});

const Saved = mongoose.model("saved", SavedSchema);

export default Saved;