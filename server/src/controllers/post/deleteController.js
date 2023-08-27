import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import deleteUpload from "../../modules/multer/deleteUpload.js";
import { error } from "../../utils/helpers/validations.js";

export default async function deletePost(req, res) {
    const { postId } = req.params;

    try {
        const post = await Post.findById(postId);

        if (post.user.toString() !== req.userId)
            return error(
                "Você não tem permissão para excluir essa publicação.",
                400,
                res
            );

        await Post.findByIdAndDelete(postId);

        post.media.forEach(async ({ source, key }) => {
            await deleteUpload(source, key);
        });

        const hasPosts = await Post.findOne({ user: req.userId });

        if (!hasPosts) await User.findByIdAndUpdate(req.userId, { hasPosts: false });

        const user = await User.findById(req.userId);
        const feed = await Post.find({
            user: { $in: [req.userId, ...user.following] },
        });

        if (!feed.length)
            await User.findByIdAndUpdate(req.userId, { hasContentInFeed: false });

        res.send({ success: "Sua publicação foi excluída." });
    } catch (err) {
        return error(
            "Não foi possível excluir sua publicação. Tente novamente.",
            500,
            res
        );
    }
}
