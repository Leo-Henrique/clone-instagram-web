import Saved from "../../models/savedModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function savePost(req, res) {
    const { userId: user } = req;
    const { postId } = req.params;
    const { collection } = req.query;

    try {
        let userSaves = await Saved.findOne({ user });
        if (!userSaves) userSaves = await Saved.create({ user });

        const { albums } = userSaves;

        if (!albums.length || albums[0].name !== "$all$") 
            albums.unshift({ name: "$all$" });

        const hasPost = albums[0].posts.some(({ post }) => 
            post.toString() === postId
        );

        if (hasPost && !collection)
            return error("A publicação já está salva.", 400, res);
        
        if (!hasPost) albums[0].posts.unshift({ post: postId });

        if (collection) {
            const hasCollection = (albums) => albums.filter(({ name }) =>
                name.toLowerCase() === collection.toLowerCase()
            )[0];
            if (!hasCollection(albums)) albums.push({ name: collection });

            const album = hasCollection(albums);
            const hasPostInCollection = album.posts.some(({ post }) => 
                post.toString() === postId
            );

            if (hasPostInCollection)
                return error("A publicação já está salva na coleção.", 400, res);
            else
                album.posts.unshift({ post: postId });
        }

        userSaves.save();
        res.send({ success: collection
            ?  `A publicação foi salva na coleção '${collection}'.`
            : "A publicação foi salva."
        });
    } catch (err) {
        return error(
            "Não foi possível salvar a publicação. Tente novamente.",
            500,
            res
        );
    }
}
