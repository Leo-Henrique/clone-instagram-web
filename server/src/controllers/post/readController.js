import Post from "../../models/postModel.js";
import User from "../../models/userModel.js"
import { error } from "../../utils/helpers/validations.js";

export default async function(req, res) {
    const { items, collection, username } = req.query;

    try {
        const user = await User.findById(req.userId);
        const populate = "user media.persons.user";
        const [allPosts, feed] = await Promise.all([
            Post.find().populate(populate),
            Post.find({ user: { $in: user.following } }).populate(populate)
        ]);
        const posts = username 
            ? allPosts.filter(({ user }) => 
                user.username === username.toLowerCase()
            )
            : allPosts.filter(({ user }) => 
                user.id === req.userId
            ).concat(feed);

        posts.sort((a, b) => b.createdAt - a.createdAt);

        const getCollection = () => {
            const endIndex = items * collection;

            return posts.filter((post, index) => 
                index >= endIndex - items && index < endIndex
            );
        }

        return res.send(items ? getCollection() : posts);
    } catch (err) {
        return error("Não foi possível carregar as publicações.", 500, res);
    }
}