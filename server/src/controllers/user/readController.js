import auth from "../../middlewares/authMiddleware.js";
import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const posts = await Post.find();
        const newUsers = users.filter(({ id }) => id !== req.userId);
        const usersWithPosts = newUsers.map(user => {
            const userPosts = posts.filter(post => post.user.toString() === user.id);
            const reorderedPosts = userPosts.sort(
                (a, b) => b.createdAt - a.createdAt
            );
            const threePosts = reorderedPosts.filter((post, index) => index < 3);

            return {
                ...user._doc,
                posts: threePosts,
            };
        });

        res.send(usersWithPosts);
    } catch (err) {
        return error("Não foi possível carregar os usuários.", 500, res);
    }
};

export const getUser = async (req, res) => {
    const { username } = req.params;
    const { current } = req.query;

    try {
        const user = await User.findOne({ username }).select("+email");

        if (!user) return error("Usuário inexistente.", 404, res);

        if (current === "true") {
            await auth(req, res);

            if (user.id === req.userId) return res.send(user);
            else
                return error("Não é possível carregar essas informações.", 400, res);
        } else {
            user.email = undefined;
            res.send(user);
        }
    } catch (err) {
        return error(
            "Não foi possível carregar as informações do usuário.",
            500,
            res
        );
    }
};
