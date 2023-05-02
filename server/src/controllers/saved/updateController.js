import Saved from "../../models/savedModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function updateCollection(req, res) {
    const { collection, rename, add, remove } = req.body;
    const updatePosts = (posts, album, callback) => {
        posts.forEach(id => {
            const hasPost = album.posts.some(({ post }) =>
                post.toString() === id
            );

            callback(hasPost, id);
        })
    };

    try {
        const userSaves = await Saved.findOne({ user: req.userId });
        const { albums } = userSaves;
        const album = albums.filter(({ name }) => 
            name.toLowerCase() === collection.toLowerCase()
        )[0];
        const isAllCollection = collection.toLowerCase() === "$all$";

        if (!album) return error("A coleção não existe.", 400, res);

        if (rename) {
            if (isAllCollection) 
                return error("Não é possível renomear essa coleção.", 400, res);

            if (rename.toLowerCase() === "$all$")
                return error("Não é possível utilizar este nome.", 400, res);

            const hasName = albums.some(({ name }) => 
                name.toString() === rename.toString()
            );

            if (hasName) 
                return error("Uma coleção com este nome já existe.", 400, res);
            
            album.name = rename;
        }

        if (add) {
            if (isAllCollection) 
                return error("Não é possível adicionar publicações nesta coleção.", 400, res);
                
            updatePosts(add, album, (hasPost, id) => {
                if (!hasPost) album.posts.unshift({ post: id });
            });
        }

        if (remove) {
            if (isAllCollection) {
                remove.forEach(id => {
                    albums.forEach(({ posts }) => {
                        const index = posts.findIndex(({ post }) =>
                            post.toString() === id
                        );

                        if (index !== -1) posts.splice(index, 1);
                    });
                });
            } else {
                updatePosts(remove, album, (hasPost, id) => {
                    const index = album.posts.findIndex(({ post }) => 
                        post.toString() === id
                    );
    
                    if (hasPost) album.posts.splice(index, 1);
                });
            }
        }

        await userSaves.save();
        if (!albums.length) {
            await Saved.deleteOne({ user: req.userId });

            res.send();
        } else {
            await userSaves.populate("albums.posts.post");

            res.send({
                name: album.name,
                posts: album.posts.map(({ post }) => post)
            });
        }
    } catch (err) {
        return error(
            "Não foi possível atualizar sua coleção. Tente novamente.", 
            500, 
            res
        );
    }
}
