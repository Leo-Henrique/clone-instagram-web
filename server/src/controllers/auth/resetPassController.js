import User from "../../models/userModel.js";
import { error, types } from "../../utils/helpers/validations.js";
import generateToken from "../../utils/helpers/token.js";

export default async function resetPassword(req, res) {
    const { userId, token, password } = req.body;

    try {
        const getToken =
            "+passwordResetToken +passwordResetTokenExpiration";
        const user = await User.findById(userId).select(getToken);

        if (!user)
            return error(
                "Não é possível redefinir a senha de um usuário inexistente.",
                404,
                res
            );

        if (!user.passwordResetToken)
            return error("Solicite a redefinição de senha novamente na página de login.", 400, res);

        if (token !== user.passwordResetToken)
            return error(
                "Você não tem permissão para alterar essa senha.",
                400,
                res
            );

        if (Date.now() > user.passwordResetTokenExpiration)
            return error(
                "O prazo para a redefinição de senha expirou. Solicite a alteração de senha novamente",
                400,
                res
            );

        if (!password)
            return error(
                "Digite uma nova senha para redefini-la.",
                400,
                res
            );

        if (!password.match(types.password.regex))
            return error(types.password.message, 400, res);

        user.password = password;
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpiration = undefined;
        user.save();

        return res.send({
            success: "Sua senha foi atualizada com sucesso.",
            token: generateToken(user.id),
        });
    } catch (err) {
        return error(
            "Não foi possível redefinir sua senha. Tente novamente.",
            500,
            res
        );
    }
}
