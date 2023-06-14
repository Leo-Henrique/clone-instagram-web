import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

const emptyField = res => error("Usuário não especificado.", 400, res);

export const follow = async (req, res) => {
    const { username } = req.body;

    try {
        if (!username) emptyField(res);

        const [user, follow] = await Promise.all([
            User.findById(req.userId),
            User.findOne({ username }),
        ]);
        const youFollow = user.following.includes(follow.id);
        const followed = follow.followers.includes(req.userId);

        if (youFollow || followed)
            return error("Você já está seguindo este usuário.", 400, res);

        user.following.push(follow.id);
        follow.followers.push(user.id);
        user.save();
        follow.save();
        res.send();
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
        const youFollow = user.following.some(({ id }) => id === unfollow.id);
        const followed = unfollow.followers.some(({ id }) => id === req.userId);

        if (!youFollow && !followed)
            return error(
                "Você não segue este usuário para deixar de segui-lo.",
                400,
                res
            );

        user.following = user.following.filter(({ id }) => id !== unfollow.id);
        unfollow.followers = unfollow.followers.filter(({ id }) => id !== user.id);
        user.save();
        unfollow.save();
        res.send();
    } catch (err) {
        return error(
            "Não foi possível deixar de seguir este usuário. Tente novamente.",
            500,
            res
        );
    }
};

export const getFriends = async (req, res) => {
    const { username, friends } = req.params;

    try {
        if (!friends.match(/^followers$|^following$/)) return res.status(404).send();

        const user = await User.findOne({ username }).populate(friends);

        res.send(user[friends]);
    } catch (err) {
        return error("Não foi possível obter os usuários.", 500, res);
    }
};
