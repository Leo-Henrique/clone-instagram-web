import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import uploadPost from "../../modules/multer/uploadPost.js";
import { error } from "../../utils/helpers/validations.js";

export default async function createPost(req, res) {
    try {
        await uploadPost("media", req, res);

        const { persons, legend, showLikes, showComments } = req.body;
        const personsData = persons && JSON.parse(persons);
        const eachPerson =
            persons &&
            personsData
                .map(({ users }) => users.map(({ username }) => username))
                .flat();
        const eachUser = await User.find({ username: { $in: eachPerson } });
        const media = req.files.map((file, index) => {
            const marked =
                persons && personsData.filter(({ media }) => media === index)[0];
            let allPersons;

            if (marked) {
                const { users } = marked;

                allPersons = users.map(({ username, offsetX, offsetY }) => ({
                    user: eachUser.filter(user => user.username === username)[0],
                    offsetX,
                    offsetY,
                }));
            }

            return {
                type: file.mimetype.match(/^.+(?=\/)/)[0],
                source: file.path,
                persons: allPersons,
            };
        });

        const post = await Post.create({
            user: req.userId,
            media,
            legend,
            showLikes: showLikes && showLikes === "true",
            showComments: showComments && showComments === "true",
            isReel:
                req.files.length === 1 && req.files[0].mimetype.includes("video"),
        });

        await User.findByIdAndUpdate(req.userId, {
            hasPosts: true,
            hasContentInFeed: true,
        });

        res.send(post);
    } catch {
        return error(
            "Não foi possível compartilhar sua publicação. Por favor, tente novamente.",
            500,
            res
        );
    }
}
