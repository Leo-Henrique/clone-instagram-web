import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";
import crypto from "crypto";
import transporter from "../../utils/mail/transporter.js";
import forgotPassTemplate from "../../utils/mail/forgotPassTemplate.js";

export default async function forgotPassword(req, res) {
    const { user: userIdentify } = req.body;

    try {
        if (!userIdentify) return error(
            "Forneça seu e-mail ou nome de usuário para redefinir sua senha.", 
            400, 
            res
        );

        let user = await Promise.all([
            User.findOne({ email: userIdentify }),
            User.findOne({ username: userIdentify })
        ]);

        const userExists = user.filter(item => !!item);

        if (!userExists.length)
            return error("Usuário não encontrado.", 400, res);

        user = userExists[0];
        const token = crypto.randomBytes(20).toString("hex");
        const tokenExpiration = Date.now() + (1000 * 60 * 30);
        const message = {
            from: {
                name: process.env.WEBSITE_NAME,
                address: process.env.MAIL_FROM
            },
            to: user.email,
            subject: "Redefinição de senha",
            html: forgotPassTemplate({ 
                userId: user.id,
                name: user.name, 
                token
            })
        };
        const result = err => {
            if (err) return error(
                "Não foi possível enviar um link para login. Tente novamente mais tarde.", 
                500, 
                res
            );
            return res.send({ success: true });
        }

        await User.findByIdAndUpdate(user.id, {
            passwordResetToken: token,
            passwordResetTokenExpiration: tokenExpiration
        });
        transporter().sendMail(message, result);
    } catch (err) {
        return error(
            "Erro inesperado.",
            500,
            res
        )
    }
}