import Post from "../../models/postModel.js";
import { error } from "../../utils/helpers/validations.js";

export const like = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req;

    try {
        const post = await Post.findById(postId);
        const hasLike = post.likes.some(id => id.toString() === userId);

        if (hasLike) return error("Você já curtiu a publicação.", 400, res);
        else post.likes.push(userId);

        post.save();
        res.send();
    } catch (err) {
        return error(
            "Não foi possível curtir a publicação. Tente novamente.",
            500,
            res
        );
    }
};

export const getLikes = async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId).populate("likes");

        res.send(post.likes);
    } catch (err) {
        return error("Não foi possível obter as curtidas.", 500, res);
    }
};

export const unlike = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req;

    try {
        const post = await Post.findById(postId);
        const index = post.likes.findIndex(id => id.toString() === userId);

        if (index === -1) throw new Error();
        else post.likes.splice(index, 1);

        post.save();
        res.send();
    } catch (err) {
        return error(
            "Não foi possível deixar de curtir a publicação. Tente novamente.",
            500,
            res
        );
    }
};
