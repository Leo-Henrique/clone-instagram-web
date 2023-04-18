import User from "../../models/userModel.js";
import { types, error, requiredFields } from "../../utils/helpers/validations.js";
import generateToken from "../../utils/helpers/token.js";

export default async function signUp(req, res) {
    const { email, username } = req.body;
    const values = Object.values(req.body);

    try {
        let validationError;

        if (requiredFields(values, res)) return requiredFields(values, res);

        const [emailExists, usernameExists] = await Promise.all([
            User.findOne({ email }),
            User.findOne({ username }),
        ]);

        if (emailExists) return error("E-mail já existente.", 400, res);
        if (usernameExists) return error("Nome de usuário já existente.", 400, res);

        Object.keys(types).forEach(type => {
            const validateField = req.body[type];
            const validate = validateField.match(types[type].regex);

            if (validateField && !validate) 
                validationError = error(types[type].message, 400, res);
        });

        if (validationError) return validationError;

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