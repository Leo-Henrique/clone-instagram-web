import auth from "../../middlewares/authMiddleware.js";
import Post from "../../models/postModel.js";
import User from "../../models/userModel.js"
import { error } from "../../utils/helpers/validations.js";

const reorder = (posts) => posts.sort((a, b) => b.createdAt - a.createdAt);

const filteredPosts = (posts, items, collection) => {
    if (items && collection) {
        const endIndex = items * collection;

        return posts.filter((post, index) => 
            index >= endIndex - items && index < endIndex
        );
    } else return posts;
}

export const getPost = async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId).populate("user");
        
        return res.send(post);
    } catch (err) {
        return error("Não foi possível carregar a publicação", 500, res);
    }
}

export const getPosts = async (req, res) => {
    const { reels, items, collection, username } = req.query;
    const getReels = reels === "true";

    try {
        if (username) {
            const hasFilter = items || collection;
            const itemsLimit = getReels ? 16 : 12;
            const filterLimit = items > itemsLimit || collection > 1;

            if (!hasFilter || filterLimit) await auth(req, res);

            const allPosts = await Post.find({
                ...(getReels && { isReel: true })
            }).populate("user");
            const posts = allPosts.filter(({ user }) => user.username === username);
          
            reorder(posts);
            res.send(filteredPosts(posts, items, collection));
        } else {
            await auth(req, res);

            const user = await User.findById(req.userId);
            const feed = await Post.find({ 
                ...(getReels || { user: { $in: [req.userId, ...user.following] } }),
                ...(getReels && { isReel: true })
            }).populate("user media.persons.user");
            
            reorder(feed);
            res.send(filteredPosts(feed, items, collection));
        }
    } catch (err) {
        return error("Não foi possível carregar as publicações.", 500, res);
    }
}