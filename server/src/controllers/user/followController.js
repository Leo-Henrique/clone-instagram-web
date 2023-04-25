import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

const emptyField = (res) => error("Usuário não especificado.", 400, res);

export const follow = async (req, res) => {
    const { username } = req.body;

    try {
        if (!username) emptyField(res);

        const [user, follow] = await Promise.all([
            User.findById(req.userId),
            User.findOne({ username }),
        ]);

        if (
            user.following.includes(follow.id) ||
            follow.followers.includes(user.id)
        )
            throw new Error();

        user.following.push(follow.id);
        follow.followers.push(user.id);
        user.save();
        follow.save();
        res.send({ success: true });
    } catch (err) {
        return error(
            "Não foi possível seguir este usuário. Tente novamente.",
            500,
            res
        );
    }
};

export const unfollow = async (req, res) => {
    const { username } = req.body;

    try {
        if (!username) emptyField(res);

        const [user, unfollow] = await Promise.all([
            User.findById(req.userId).populate("following"),
            User.findOne({ username }).populate("followers"),
        ]);

        user.following = user.following.filter(
            ({ id }) => id !== unfollow.id
        );
        unfollow.followers = unfollow.followers.filter(
            ({ id }) => id !== user.id
        );
        user.save();
        unfollow.save();
        res.send({ success: true });
    } catch (err) {
        return error(
            "Não foi possível deixar de seguir este usuário. Tente novamente.",
            500,
            res
        );
    }
};
