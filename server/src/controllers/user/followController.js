import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

export const follow = async (req, res) => {
    const { instagramUserId } = req.params;

    try {
        const [authUser, instagramUser] = await Promise.all([
            User.findById(req.userId),
            User.findById(instagramUserId),
        ]);
        const youFollow = authUser.following.includes(instagramUser.id);
        const followed = instagramUser.followers.includes(req.userId);

        if (youFollow || followed)
            return error("Você já está seguindo este usuário.", 400, res);

        authUser.following.push(instagramUser.id);
        instagramUser.followers.push(req.userId);
        authUser.save();
        instagramUser.save();
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
    const { instagramUserId } = req.params;

    try {
        const [authUser, instagramUser] = await Promise.all([
            User.findById(req.userId),
            User.findById(instagramUserId),
        ]);
        const youFollow = authUser.following.includes(instagramUser.id);
        const followed = instagramUser.followers.includes(req.userId);

        if (!youFollow && !followed)
            return error(
                "Você não segue este usuário para deixar de segui-lo.",
                400,
                res
            );

        authUser.following = authUser.following.filter(
            id => id.toString() !== instagramUserId
        );
        instagramUser.followers = instagramUser.followers.filter(
            id => id.toString() !== req.userId
        );
        authUser.save();
        instagramUser.save();
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
