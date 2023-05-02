import Saved from "../../models/savedModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function createCollection(req, res) {
    const { userId: user } = req;
    const { collection, posts } = req.body;

    try {
        if (collection.toLowerCase() === "*all*")
            return error("Infelizmente, a coleção não pode ter este nome.", 400, res);

        let userSaves = await Saved.findOne({ user });
        if (!userSaves) userSaves = await Saved.create({ user });

        const { albums } = userSaves;
        const hasCollection = albums.some(
            ({ name }) => name.toString() === collection.toString()
        );

        if (hasCollection) return error("Uma coleção com este nome já existe.", 400, res);

        albums.push({ name: collection });

        const album = albums.filter(({ name }) => name === collection)[0];

        if (posts) album.posts = posts.map(post => ({ post }));

        userSaves.save();
        await userSaves.populate("albums.posts.post");
        res.send({
            name: album.name,
            posts: album.posts.map(({ post }) => post),
        });
    } catch (err) {
        return error("Não foi possível criar sua coleção. Tente novamente.", 400, res);
    }
}
