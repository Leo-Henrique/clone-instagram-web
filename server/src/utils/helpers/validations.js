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
        regex: /.{3,}/,
        message: "Sua senha deve ter no mínimo 3 caracteres."
    }
}

export const error = (msg, status, res) => {
    return res.status(status).send({ error: msg });
}

export const requiredFields = (values, res) => {
    if (values.filter(value => !value).length)
        return error("Todos os campos são obrigatórios.", 400, res);
}
