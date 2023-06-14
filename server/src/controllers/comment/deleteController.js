import Comment from "../../models/commentModel.js";
import Post from "../../models/postModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function deleteComment(req, res) {
    const { commentId } = req.params;
    const { userId } = req;

    try {
        let comment = await Comment.findById(commentId);
        let parent = comment;

        if (!comment) {
            parent = await Comment.findOne({
                replies: { $elemMatch: { _id: commentId } },
            });
            comment = parent.replies.find(({ id }) => id.toString() === commentId);
        }

        if (!comment) throw new Error();

        const post = await Post.findById(parent.post);
        const isUserComment = comment.user.toString() === userId;
        const isUserPost = post.user.toString() === userId;

        if (!isUserComment && !isUserPost)
            return error(
                "Você não tem permissão para excluir este comentário.",
                400,
                res
            );

        if (comment.replies) await Comment.findByIdAndDelete(commentId);
        else
            await Comment.findByIdAndUpdate(parent.id, {
                $pull: { replies: { _id: commentId } },
            });

        res.send();
    } catch (err) {
        console.log(err);
        return error(
            "Não foi possível excluir o comentário. Tente novamente.",
            500,
            res
        );
    }
}
