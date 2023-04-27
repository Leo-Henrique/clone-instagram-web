import Saved from "../../../models/savedModel.js";
import { error } from "../../../utils/helpers/validations.js";

const postsSaved = (postsToUpdate, saved) => {
    let err;

    postsToUpdate.forEach(postToUpdate => {
        const hasPost = saved.posts.filter(({ post }) => 
            post.toString() === postToUpdate
        )[0];

        if (!hasPost) err = "Alguma publicação não está salva.";
    });
    return err;
}

const updateItems = (postsToUpdate, saved, callback) =>  {
    saved.posts.forEach(({ post, albums }) => {
        const postId = post.toString();

        if (postsToUpdate.includes(postId)) callback(albums);
    });
}

export default async function updateCollection(req, res) {
    const { name } = req.params;
    const { add, remove, rename } = req.body;

    try {
        const saved = await Saved.findOne({ user: req.userId });

        if (!saved.albums.includes(name))
            return error("A coleção não existe.", 400, res);

        if (add || remove) {
            const notSaved = postsSaved([
                ...(add ? add : []),
                ...(remove ? remove : [])
            ].flat(), saved);

            if (notSaved) return error(notSaved, 400, res);
        }
        if (add) {
            let err;

            updateItems(add, saved, (albums) => {
                if (albums.includes(name))
                    err = "Alguma publicação já está na coleção para ser adicionada.";
                else
                    albums.push(name);
            })

            if (err) return error(err, 400, res);
        };
        if (remove) {
            let err;

            updateItems(remove, saved, (albums) => {
                const albumIndex = albums.indexOf(name);

                if (albums.includes(name)) 
                    albums.splice(albumIndex, 1);
                else
                    err = "Alguma publicação não existe na coleção para ser removida.";
            })

            if (err) return error(err, 400, res);
        }

        if (rename) {
            const hasName = saved.albums.filter(album => 
                album.toLowerCase() === rename.toLowerCase()
            )[0];

            if (hasName) 
                return error("Uma coleção com este nome já existe.", 400, res);

            const albumIndex = saved.albums.indexOf(name);

            saved.albums[albumIndex] = rename;
            saved.posts.forEach(({ albums }) => {
                if (albums.includes(name)) {
                    const albumIndex = albums.indexOf(name);

                    albums[albumIndex] = rename;
                }
            });
        }

        saved.save();
        res.send({ success: add || remove
            ? "Sua coleção foi atualizada."
            : "Sua coleção foi renomeada."
        });
    } catch (err) {
        return error(
            "Não foi possível atualizar sua coleção. Tente novamente.", 
            500, 
            res
        );
    }
}