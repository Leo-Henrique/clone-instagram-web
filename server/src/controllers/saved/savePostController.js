import Saved from "../../models/savedModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function savePost(req, res) {
    const { userId: user } = req;
    const { postId } = req.params;
    const { collection } = req.query;

    try {
        const hasSaved = await Saved.findOne({ user });
        let saved = hasSaved;

        if (!hasSaved) saved = await Saved.create({ user });
        
        const hasPost = saved.posts.filter(({ post }) => 
            post.toString() === postId
        )[0];

        if (collection) {
            if (!saved.albums.includes(collection))
                saved.albums.push(collection);

            if (hasPost) {
                if (hasPost.albums.includes(collection))
                    return error("A publicação já está salva nesta coleção.", 400, res);
                else
                    hasPost.albums.push(collection);
            } else
                saved.posts.push({ post: postId, albums: collection });
        } else {
            if (hasPost)
                return error("A publicação já está salva.", 400, res);
            else
                saved.posts.push({ post: postId });
        }

        saved.save();
        res.send({ success: collection 
            ? `A publicação foi salva na coleção '${collection}'.`
            : "A publicação foi salva."
        });
    } catch (err) {
        return error(
            "Não foi possível salvar a publicação. Tente novamente.",
            500,
            res
        );
    }
};
