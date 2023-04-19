export const types = {
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
    },
    password: {
        regex: /^.{3,}$/,
        message: "Sua senha deve ter no mínimo 3 caracteres."
    },
    bio: {
        regex: /^.{1,150}$/m,
        message: "Sua biografia deve ter no máximo 150 caracteres."
    }
}

export const error = (msg, status, res) => {
    return res.status(status).send({ error: msg });
}

export const requiredFields = ({ body }, res) => {
    const values =  Object.values(body)
    let message;

    if (values.filter(value => !value).length)
        message = () => error("Todos os campos são obrigatórios.", 400, res);

    return message
}

export const validateFields = ({ body }, res) => {
    const keys = Object.keys(body);
    let message;

    keys.forEach(key => {
        const type = types[key];

        if (type && !body[key].match(type.regex))
            message = () => error(type.message, 400, res);
    });

    return message;
}