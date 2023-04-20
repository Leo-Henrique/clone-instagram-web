import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

const friends = ("followers following");

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate(friends);

        return res.send(users);
    } catch (err) {
        return error("Não foi possível carregar os usuários.", 500, res);
    }
}

export const getUser = async (req, res) => {
    const username = req.params.username;

    try {
        const user = await User.findOne({ username }).populate(friends);

        if (!user)
            return error("Usuário inexistente.", 400, res);

        return res.send(user);
    } catch (err) {
        return error("Não foi possível carregar os usuários.", 500, res);
    }
}