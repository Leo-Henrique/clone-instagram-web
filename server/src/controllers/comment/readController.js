import Post from "../../models/postModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function getComments(req, res) {
    const { postId } = req.params;

    try {
        const { comments } = await Post.findById(postId).populate({
            path: "comments",
            populate: { path: "user replies.user" },
        });

        res.send(comments);
    } catch (err) {
        error("Não foi possível carregar os comentários da publicação.", 500, res);
    }
}
