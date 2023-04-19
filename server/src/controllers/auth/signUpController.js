import User from "../../models/userModel.js";
import { error, requiredFields, validateFields } from "../../utils/helpers/validations.js";
import generateToken from "../../utils/helpers/token.js";

export default async function signUp(req, res) {
    const { email, username } = req.body;

    try {
        const required = requiredFields(req, res);

        if (required) return required();

        const [emailExists, usernameExists] = await Promise.all([
            User.findOne({ email }),
            User.findOne({ username }),
        ]);

        if (emailExists) return error("E-mail já existente.", 400, res);
        if (usernameExists) return error("Nome de usuário já existente.", 400, res);

        const validate = validateFields(req, res);

        if (validate) return validate();

        const user = await User.create(req.body);

        user.password = undefined;
        res.status(201).send({
            user,
            token: generateToken(user.id)
        });
    } catch (err) {
        return error(
            "Não foi possível fazer o cadastro. Tente novamente mais tarde.", 
            500, 
            res
        );
    }
};