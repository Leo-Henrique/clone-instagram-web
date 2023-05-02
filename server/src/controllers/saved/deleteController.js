import Saved from "../../models/savedModel.js";
import { error } from "../../utils/helpers/validations.js";

export const deleteSave = async (req, res) => {
    const { postId } = req.params;

    try {
        const userSaves = await Saved.findOne({ user: req.userId });
        const { albums } = userSaves;
        const hasPost = albums[0].posts.some(({ post }) => 
            post.toString() === postId
        );

        if (!hasPost)
            return error("A publicação não está salva.", 400, res);

        albums.forEach(({ posts }) => {
            const index = posts.findIndex(
                ({ post }) => post.toString() === postId
            );

            if (index !== -1) posts.splice(index, 1);
        });

        await userSaves.save();
        if (!albums.length) await Saved.deleteOne({ user: req.userId });

        res.send({ success: "A publicação foi removida dos salvos." });
    } catch (err) {
        return error(
            "Não foi possível excluir a publicação dos salvos. Tente novamente.",
            500,
            res
        );
    }
};

export const deleteCollection = async (req, res) => {
    const { collection } = req.params;

    try {
        const userSaves = await Saved.findOne({ user: req.userId });
        const { albums } = userSaves;

        if (collection.toLowerCase() === "$all$")
            return error("Não é possível excluir essa coleção.", 400, res);

        const albumIndex = albums.findIndex(
            ({ name }) => name.toLowerCase() === collection.toLowerCase()
        );

        if (albumIndex === -1)
            return error("A coleção não existe.", 400, res);

        albums.splice(albumIndex, 1);
        await userSaves.save();

        if (!albums.length) await Saved.deleteOne({ user: req.userId });

        res.send({ success: "Sua coleção foi excluída." });
    } catch (err) {
        return error(
            "Não foi possível excluir sua coleção. Tente novamente.",
            500,
            res
        );
    }
};

export const deleteCollections = async (req, res) => {
    try {
        const userSaves = await Saved.findOne({ user: req.userId });
        let { albums } = userSaves;

        albums = albums.filter(({ name }) => 
            name === "$all$"
        );

        if (albums[0]) {
            userSaves.albums = albums;
            userSaves.save();
        } else await Saved.deleteOne({ user: req.userId });

        res.send({ success: "Todas as suas coleções foram excluídas." });
    } catch (err) {
        return error(
            "Não foi possível excluir suas coleções. Tente novamente.", 
            500, 
            res
        );
    }
}