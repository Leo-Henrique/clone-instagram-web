import Comment from "../../models/commentModel.js";
import { error } from "../../utils/helpers/validations.js";

const getReply = async id => {
    const parent = await Comment.findOne({
        replies: {
            $elemMatch: { _id: id },
        },
    });
    const comment = parent.replies.find(reply => reply.id.toString() === id);

    return { parent, comment };
};

export const like = async (req, res) => {
    const { commentId } = req.params;

    try {
        let comment = await Comment.findById(commentId);
        let doc = comment;

        if (!comment) {
            const reply = await getReply(commentId);

            comment = reply.comment;
            doc = reply.parent;
        }

        const hasLike = comment.likes.some(id => id.toString() === req.userId);

        if (hasLike) return error("Você já curtiu o comentário.", 400, res);

        comment.likes.push(req.userId);
        doc.save();
        res.send();
    } catch (err) {
        return error(
            "Não foi possível curtir o comentário. Tente novamente.",
            500,
            res
        );
    }
};

export const getLikes = async (req, res) => {
    const { commentId } = req.params;

    try {
        let comment = await Comment.findById(commentId);
        let doc = comment;

        if (!comment) {
            const reply = await getReply(commentId);

            comment = reply.comment;
            doc = reply.parent;
            await doc.populate("replies.likes");
        } else await doc.populate("likes");

        const { likes } = comment;

        likes.sort(() => 0.5 - Math.random());
        res.send(likes);
    } catch (err) {
        return error("Não foi possível obter as curtidas.", 500, res);
    }
};

export const unlike = async (req, res) => {
    const { commentId } = req.params;

    try {
        let comment = await Comment.findById(commentId);
        let doc = comment;

        if (!comment) {
            const reply = await getReply(commentId);

            comment = reply.comment;
            doc = reply.parent;
        }

        const { likes } = comment;
        const likeIndex = likes.findIndex(id => id.toString() === req.userId);

        if (likeIndex === -1) throw new Error();
        else likes.splice(likeIndex, 1);

        doc.save();
        res.send();
    } catch (err) {
        return error(
            "Não foi possível deixar de curtir o comentário. Tente novamente.",
            500,
            res
        );
    }
};
