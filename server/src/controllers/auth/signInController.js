import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import { error, requiredFields } from "../../utils/helpers/validations.js";
import generateToken from "../../utils/helpers/token.js";

export default async function signIn(req, res) {
    const { user, password } = req.body;
    const values = Object.values(req.body);

    try {
        let userData;

        if (requiredFields(values, res)) return requiredFields(values, res);

        const userExists = await Promise.all([
            User.findOne({ email: user }).select("+password"),
            User.findOne({ username: user }).select("+password"),
        ]);

        if (!userExists.filter(item => !!item).length)
            return error("Usuário não encontrado.", 400, res);

        userData = userExists[0];

        if (!(await bcrypt.compare(password, userData.password)))
            return error("Senha inválida.", 400, res);

        userData.password = undefined;
        res.send({
            user: userData,
            token: generateToken(userData.id)
        });
    } catch (err) {
        return error(
            "Não foi possível fazer o login. Tente novamente mais tarde.", 
            500, 
            res
        );
    }
}