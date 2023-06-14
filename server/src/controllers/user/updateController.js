import User from "../../models/userModel.js";
import {
    error,
    requiredFields,
    types,
    validateFields,
} from "../../utils/helpers/validations.js";
import bcrypt from "bcryptjs";

export const updateInfos = async (req, res) => {
    const values = Object.values(req.body);

    try {
        if (!values.length)
            return error("Forneça alguma informação para ser alterada.", 400, res);

        if (values.filter(value => !value).length)
            return error(
                "Um campo não pode estar vazio para ser alterado.",
                400,
                res
            );

        const validate = validateFields(req, res);

        if (validate) return validate();

        const user = await User.findByIdAndUpdate(req.userId, req.body, {
            new: true,
        }).select("+email");

        res.send(user);
    } catch (err) {
        return error(
            "Não foi possível fazer as alterações. Tente novamente.",
            500,
            res
        );
    }
};

export const updatePassword = async (req, res) => {
    const { old, current, currentConfirm } = req.body;

    try {
        const required = requiredFields(req, res);

        if (required) return required();

        const user = await User.findById(req.userId).select("+password");

        if (!(await bcrypt.compare(old, user.password)))
            return error("Sua senha antiga foi inserida incorretamente.", 400, res);

        if (old === current)
            return error("Crie uma nova senha diferente da atual.", 400, res);

        if (!current.match(types.password.regex)) {
            const msg = types.password.message;
            const newMsg = msg.replace("senha", "nova senha");

            return error(newMsg, 400, res);
        }

        if (current !== currentConfirm)
            return error("As senhas não correspondem.", 400, res);

        user.password = current;
        user.save();
        res.send({ success: "Sua senha foi atualizada com sucesso." });
    } catch (err) {
        return error(
            "Não foi possível atualizar sua senha. Tente novamente.",
            500,
            res
        );
    }
};
