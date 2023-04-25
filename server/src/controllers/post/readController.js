import Post from "../../models/postModel.js";
import User from "../../models/userModel.js"
import { error } from "../../utils/helpers/validations.js";

const reorder = (posts) => posts.sort((a, b) => b.createdAt - a.createdAt);

const getCollection = (posts, items, collection) => {
    const endIndex = items * collection;

    return posts.filter((post, index) => 
        index >= endIndex - items && index < endIndex
    );
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
    const { items, collection, username } = req.query;
    const { userId } = req;

    try {
        const filteredPosts = (posts) => 
            items ? getCollection(posts, items, collection) : posts;

        if (username) {
            const allPosts = await Post.find().populate("user");
            const posts = allPosts.filter(({ user }) => user.username === username);
          
            reorder(posts);
            res.send(filteredPosts(posts));
        } else {
            const user = await User.findById(userId);
            const feed = await Post.find({ user: {
                $in: [userId, ...user.following]
            }}).populate("user media.persons.user");

            reorder(feed);
            res.send(filteredPosts(feed));
        }
    } catch (err) {
        return error("Não foi possível carregar as publicações.", 500, res);
    }
}