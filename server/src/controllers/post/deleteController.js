import Post from "../../models/postModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function deletePost(req, res) {
    const { postId } = req.params;

    try {
        const post = await Post.findByIdAndDelete(postId);

        if (!post) throw new Error();

        res.send({ success: "Sua publicação foi excluída." })
    } catch (err) {
        return error(
            "Não foi possível excluir sua publicação. Tente novamente.",
            500,
            res
        );
    }
}
