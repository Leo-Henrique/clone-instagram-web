import Comment from "../../models/commentModel.js";
import Post from "../../models/postModel.js";
import { error, types } from "../../utils/helpers/validations.js";

export default async function createComment(req, res) {
    const { postId } = req.params;
    const { content } = req.body;

    try {
        if (!content) return error("Seu comentário não pode estar vazio.", 400, res);

        if (!content.match(types.comment.regex))
            return error(types.comment.message, 400, res);

        const comment = await Comment.create({
            user: req.userId,
            content,
        });
        await Post.findByIdAndUpdate(postId, {
            $push: { comments: comment.id }
        });

        res.send(comment);
    } catch (err) {
        return error(
            "Não foi possível publicar seu comentário. Tente novamente.",
            500,
            res
        );
    }
}
