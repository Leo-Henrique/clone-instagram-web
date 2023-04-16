import User from "../models/user.js";
import error from "../helpers/error.js";

const types = {
    email: {
        regex: /^[\w\-.]+@[a-z0-9\-]+\.[a-z]+(\.[a-z]+)?$/,
        message: "Digite um e-mail válido."
    },
    name: {
        regex: /^[a-zÀ-öù-Ź ]{2,}$/i,
        message: "Digite um nome válido."
    },
    username: {
        regex: /^[\w.]+$/,
        message: "Nomes de usuário só podem conter letras, números, sublinhados e pontos."
    }
}

export const signUp = async (req, res) => {
    const { email, username } = req.body;
    const allValues = Object.values(req.body);

    try {
        let validationError;

        if (allValues.filter(value => !value).length)
            return error("Todos os campos são obrigatórios.", 400, res);

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

        res.status(201).send(user);
    } catch (error) {
        return error(
            "Não foi possível fazer o cadastro. Tente novamente mais tarde.", 
            500, 
            res
        );
    }
};
