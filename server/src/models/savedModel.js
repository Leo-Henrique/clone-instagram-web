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

SavedSchema.pre("save", async function(next) {
    const globalCollection = this.albums.find(({ name }) => name === "$all$");

    if (globalCollection && !globalCollection.posts.length) {
        const index = this.albums.indexOf(globalCollection);
    
        this.albums.splice(index, 1);
    }
    
    next();
});

const Saved = mongoose.model("saved", SavedSchema);

export default Saved;