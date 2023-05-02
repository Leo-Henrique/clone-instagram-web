import auth from "../../middlewares/authMiddleware.js";
import Post from "../../models/postModel.js";
import User from "../../models/userModel.js"
import { error } from "../../utils/helpers/validations.js";
import filteredContent from "../../utils/helpers/filteredContent.js";

const reorder = (posts) => posts.sort((a, b) => b.createdAt - a.createdAt);
const reorderComments = (comments) => comments.sort((a, b) => b.likes.length - a.likes.length);

export const getPost = async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId)
            .populate("user comments")
            .populate({ path: "comments", populate: { path: "user" } });

        reorderComments(post.comments);
        return res.send(post);
    } catch (err) {
        return error("Não foi possível carregar a publicação.", 500, res);
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
            res.send(filteredContent(posts, req.query));
        } else {
            await auth(req, res);

            const user = await User.findById(req.userId);
            const feed = await Post.find({ 
                ...(getReels || { user: { $in: [req.userId, ...user.following] } }),
                ...(getReels && { isReel: true })
            })
                .populate("user media.persons.user")
                .populate({ path: "comments", populate: { path: "user" } });

            feed.forEach(post => {
                reorderComments(post.comments);
                post.comments = post.comments.filter((item, index) => index < 2);
            });
            reorder(feed);
            res.send(filteredContent(feed, req.query));
        }
    } catch (err) {
        console.log(err)
        return error("Não foi possível carregar as publicações.", 500, res);
    }
}