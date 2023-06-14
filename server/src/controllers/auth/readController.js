import Post from "../../models/postModel.js";
import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function getAuthenticatedUser(req, res) {
    try {
        const user = await User.findById(req.userId);
        const feed = await Post.findOne({
            user: { $in: [req.userId, ...user.following] },
        });

        if (!user)
            return error("Não foi possível encontrar suas informações.", 400, res);

        res.send({
            ...user._doc,
            hasContentInFeed: !!feed,
        });
    } catch (err) {
        console.log(err);
        return error("Não foi possível carregar suas informações.", 500, res);
    }
}
