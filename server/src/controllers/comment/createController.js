import Comment from "../../models/commentModel.js";
import Post from "../../models/postModel.js";
import { error, types } from "../../utils/helpers/validations.js";

export default async function createComment(req, res) {
    const { postId } = req.params;
    const { content, replyTo } = req.body;

    try {
        if (!content) return error("Seu comentário não pode estar vazio.", 400, res);

        if (!content.match(types.comment.regex))
            return error(types.comment.message, 400, res);

        const schema = { user: req.userId, content };
        let comment;

        if (!replyTo) {
            comment = await Comment.create({ ...schema, post: postId });

            await Post.findByIdAndUpdate(postId, {
                $push: { comments: comment.id },
            });
        } else {
            const parent = await Comment.findByIdAndUpdate(
                replyTo,
                {
                    $push: { replies: schema },
                },
                { new: true }
            );
            const { replies } = parent;

            comment = replies[replies.length - 1];
        }

        res.send(comment);
    } catch (err) {
        return error(
            "Não foi possível publicar seu comentário. Tente novamente.",
            500,
            res
        );
    }
}
