import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";

export default async function getAuthenticatedUser(req, res) {
    try {
        const user = await User.findById(req.userId);

        if (!user)
            return error("Não foi possível encontrar suas informações.", 400, res);

        res.send(user);
    } catch (err) {
        return error("Não foi possível carregar suas informações.", 500, res);
    }
}
