import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import { uploadPost } from "../../modules/multer/uploads.js";
import { error, types } from "../../utils/helpers/validations.js";

export default async function createPost(req, res) {
    try {
        const files = await uploadPost("media", req, res);
        const { persons, legend, showLikes, showComments } = req.body;
        const personsData = persons && JSON.parse(persons);
        const eachPerson =
            persons &&
            personsData
                .map(({ users }) => users.map(({ username }) => username))
                .flat();
        const eachUser = await User.find({ username: { $in: eachPerson } });
        const media = files.map((file, index) => {
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

        if (legend && !legend.match(types.postLegend.regex))
            return error(types.postLegend.message, 400, res);

        const post = await Post.create({
            user: req.userId,
            media,
            legend,
            showLikes: showLikes && showLikes === "true",
            showComments: showComments && showComments === "true",
            isReel: files.length === 1 && files[0].mimetype.includes("video"),
        });

        await User.findByIdAndUpdate(req.userId, {
            hasPosts: true,
            hasContentInFeed: true,
        });

        res.send(post);
    } catch (err) {
        if (typeof err === "string") return error(err, 400, res);
        else
            return error(
                "Não foi possível compartilhar sua publicação. Por favor, tente novamente.",
                500,
                res
            );
    }
}
