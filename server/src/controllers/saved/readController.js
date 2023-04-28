import Saved from "../../models/savedModel.js";
import filteredContent from "../../utils/helpers/filteredContent.js";
import { error } from "../../utils/helpers/validations.js";

const genericError = "Não foi possível obter suas publicações salvas.";

export const getCollections = async (req, res) => {
    try {
        const userSaves = await Saved.findOne({ user: req.userId })
            .populate("albums.posts.post");
        if (!userSaves) return res.send([]);

        const { albums } = userSaves;

        albums.sort((a, b) => b.createdAt - a.createdAt);
        albums.forEach(({ posts }) => {
            posts.sort((a, b) => b.addedAt - a.addedAt);
        });

        const preview = albums.map(({ name, posts }) => {
            const recentPosts = posts.map(({ post }, index) => {
                if (index < 4) return post;
            }).filter(post => post); 

            return { name, recentPosts };
        });
        const allCollectionIndex = preview.findIndex(({ name }) => 
            name === "all"
        );
        const allCollection = preview.splice(allCollectionIndex, 1);
        
        preview.unshift(allCollection[0]);
        res.send(filteredContent(preview, req.query));
    } catch (err) {
        return error(genericError, 500, res);
    }
};

export const getCollection = async (req, res) => {
    const { collection } = req.params;

    try {
        const userSaves = await Saved.findOne({ user: req.userId })
            .populate("albums.posts.post");
        const album = userSaves.albums.filter(({ name }) =>
            name.toLowerCase() === collection.toLowerCase()
        )[0];

        if (!album) return error("A coleção não existe.", 400, res);

        let posts = album.posts.sort((a, b) => b.addedAt - a.addedAt);

        posts = posts.map(({ post }) => post);

        res.send(filteredContent(posts, req.query));
    } catch (err) {
        return error(genericError, 500, res);
    }
}