import Saved from "../../models/savedModel.js";
import { error } from "../../utils/helpers/validations.js";

export const createCollection = async (req, res) => {
    const { userId: user } = req;
    const { collection, posts } = req.body;

    try {
        if (!collection) 
            return error("Especifique um nome para criar uma coleção.", 400, res);

        const hasSaved = await Saved.findOne({ user });
        let saved = hasSaved;

        if (!hasSaved) saved = await Saved.create({ user });

        if (saved.albums.includes(collection))
            return error("Uma coleção com este nome já existe.", 400, res);

        saved.albums.push(collection);

        if (posts) {
            saved.posts.forEach(({ post, albums }) => {
                if (posts.includes(post.toString()))
                    albums.push(collection);
            });
        }

        saved.save();
        res.send({ success: "Sua coleção foi criada." });
    } catch (err) {
        return error("Não foi possível criar a coleção. Tente novamente.", 500, res);
    }
}