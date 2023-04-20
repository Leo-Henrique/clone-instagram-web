import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import { error, requiredFields } from "../../utils/helpers/validations.js";
import generateToken from "../../utils/helpers/token.js";

export default async function signIn(req, res) {
    const { user: userIdentify, password } = req.body;

    try {
        const required = requiredFields(req, res);
        
        if (required) return required();

        let user = await Promise.all([
            User.findOne({ email: userIdentify }).select("+password"),
            User.findOne({ username: userIdentify }).select("+password"),
        ]);

        const userExists = user.filter(item => !!item);

        if (!userExists.length)
            return error("Usuário não encontrado.", 404, res);

        user = userExists[0];

        if (!(await bcrypt.compare(password, user.password)))
            return error("Senha inválida.", 400, res);

        user.password = undefined;
        res.send({
            user: user,
            token: generateToken(user.id)
        });
    } catch (err) {
        return error(
            "Não foi possível fazer o login. Tente novamente mais tarde.", 
            500, 
            res
        );
    }
}