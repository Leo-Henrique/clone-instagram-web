import Post from "../../models/postModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function getComments(req, res) {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId).populate({
            path: "comments",
            populate: { path: "user replies.user" },
        });

        post.comments.sort((a, b) => b.createdAt - a.createdAt);

        if (!post.showComments) post.comments = [];

        res.send(post.comments);
    } catch (err) {
        error("Não foi possível carregar os comentários da publicação.", 500, res);
    }
}
