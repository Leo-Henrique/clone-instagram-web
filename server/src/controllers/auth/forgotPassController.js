import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";
import crypto from "crypto";
import transporter from "../../config/mailer.js";
import forgotPassTemplate from "../../utils/mail/forgotPassTemplate.js";

export default async function forgotPassword(req, res) {
    const { user: userIdentify, URLToReset, websiteName } = req.body;

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
            return error("Usuário não encontrado.", 404, res);

        if (!URLToReset)
            return error("URL para redefinição de senha não fornecida.", 400, res);

        user = userExists[0];
        const token = crypto.randomBytes(20).toString("hex");
        const tokenExpiration = Date.now() + (1000 * 60 * 30);
        const message = {
            from: {
                name: websiteName || "",
                address: process.env.MAIL_FROM
            },
            to: user.email,
            subject: "Redefinição de senha",
            html: forgotPassTemplate({ 
                name: user.name, 
                websiteName,
                URLToReset,
                userId: user.id,
                token
            })
        };
        const result = (err, info) => {
            if (err) return error(
                "Não foi possível enviar um link para login. Tente novamente mais tarde.", 
                500, 
                res
            );
            const emailAddress = info.envelope.to[0];
            const email = emailAddress.split("@");
            const username = () => {
                const length = email[0].length;
                const start = email[0].slice(0, 3);
                
                if (length >= 6)
                    return `${start}${"*".repeat(7)}`;
                else if (length >= 4)
                    return `${email[0][0]}${"*".repeat(3)}`;
                else
                    return "*".repeat(3);
            }
            const domain = email[1];
            const hiddenEmail = `${username()}@${domain}`;

            return res.send({ 
                success: true,
                email: hiddenEmail
            });
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