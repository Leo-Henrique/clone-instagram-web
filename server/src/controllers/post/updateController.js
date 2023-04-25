import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function updatePost(req, res) {
    const { postId } = req.params;
    const { persons, legend, showLikes, showComments } = req.body;

    try {
        const post = await Post.findByIdAndUpdate(postId, {
            legend,
            showLikes,
            showComments,
        }, { new: true });
        const eachPerson = persons && persons.map(({ users }) => 
            users.map(({ username }) => username)
        ).flat();
        const eachUser = await User.find({ username: { $in: eachPerson }});

        if (persons) {
            persons.forEach(({ media, users }) => {
                post.media[media].persons = users.map(
                    ({ username, offsetX, offsetY }) => ({
                        user: eachUser.filter(user => 
                            user.username === username
                        )[0].id,
                        offsetX,
                        offsetY
                    }));
            });
        }

        post.save();
        res.send(post);
    } catch (err) {
        return error(
            "Não foi possível atualizar sua publicação. Tente novamente", 
            500, 
            res
        );
    }
}