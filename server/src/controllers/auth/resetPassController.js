import User from "../../models/userModel.js";
import { error } from "../../helpers/validations.js";

export default async function resetPassword(req, res) {
    const { userId, token, password } = req.body;

    try {
        const getToken = "+passwordResetToken +passwordResetTokenExpiration";
        const user = await User.findById(userId).select(getToken);

        if (!user)
            return error("Não é possível redefinir a senha de um usuário inexistente.")

        if (!user.passwordResetToken)
            return error("A senha já foi alterada.", 400, res);

        if (token !== user.passwordResetToken)
            return error("Você não tem permissão para alterar essa senha.", 400, res);

        if (Date.now() > user.passwordResetTokenExpiration)
            return error(
                "O prazo para a redefinição de senha expirou. Solicite a alteração de senha novamente",
                400,
                res
            );
        
        if (!password) return error("Digite uma nova senha para redefini-la.", 400, res);

        user.password = password;
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpiration = undefined;
        user.save();

        return res.send({ success: "Sua senha foi alterada com sucesso." });
    } catch (err) {
        return error("Não foi possível redefinir sua senha.", 500, res);
    }
}