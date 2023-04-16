import User from "../models/user.js";
import error from "../helpers/error.js";
import bcrypt from "bcryptjs";

const requiredFields = (values, res) => {
    if (values.filter(value => !value).length)
        return error("Todos os campos são obrigatórios.", 400, res);
}

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
        res.status(201).send(user);
    } catch (err) {
        return error(
            "Não foi possível fazer o cadastro. Tente novamente mais tarde.", 
            500, 
            res
        );
    }
};

export const signIn = async (req, res) => {
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
        res.send(userData);
    } catch (err) {
        return error(
            "Não foi possível fazer o login. Tente novamente mais tarde.", 
            500, 
            res
        );
    }
}