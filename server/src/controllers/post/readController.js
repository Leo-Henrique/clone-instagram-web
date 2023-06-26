import auth from "../../middlewares/authMiddleware.js";
import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import filteredContent from "../../utils/helpers/filteredContent.js";
import { error } from "../../utils/helpers/validations.js";

const reorder = posts => posts.sort((a, b) => b.createdAt - a.createdAt);
const fieldHiding = (post, userId) => {
    const filter = data => {
        if (data.user) return data.user.toString() === userId;
        return data._id.toString() === userId;
    };

    if (!post.showComments) post.comments = post.comments.filter(filter);
    if (!post.showLikes) post.likes = post.likes.filter(filter);
};

export const getPost = async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId)
            .populate("user comments")
            .populate({ path: "comments", populate: { path: "user" } });

        fieldHiding(post);

        if (post.showComments)
            post.comments.sort((a, b) => b.likes.length - a.likes.length);

        res.send(post);
    } catch (err) {
        return error("Não foi possível carregar a publicação.", 500, res);
    }
};

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
                ...(getReels && { isReel: true }),
            }).populate("user");
            const posts = allPosts.filter(({ user }) => user.username === username);

            posts.forEach(post => fieldHiding(post));
            reorder(posts);
            res.send(filteredContent(posts, req.query));
        } else {
            await auth(req, res);

            const user = await User.findById(req.userId);
            const feed = await Post.find({
                ...(getReels || { user: { $in: [req.userId, ...user.following] } }),
                ...(getReels && { isReel: true }),
            }).populate("user media.persons.user");

            feed.forEach(post => fieldHiding(post, req.userId));
            reorder(feed);
            res.send(filteredContent(feed, req.query));
        }
    } catch (err) {
        console.log(err);
        return error("Não foi possível carregar as publicações.", 500, res);
    }
};
