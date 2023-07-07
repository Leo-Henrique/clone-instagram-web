import Comment from "../../models/commentModel.js";
import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";
import bcrypt from "bcryptjs";

export default async function deleteUser(req, res) {
    const { password } = req.body;

    try {
        if (!password)
            return error(
                "Você deve fornecer sua senha para excluir sua conta.",
                400,
                res
            );

        const user = await User.findById(req.userId).select("+password");

        if (!(await bcrypt.compare(password, user.password)))
            return error("Sua senha está incorreta.", 400, res);

        await User.findByIdAndDelete(req.userId);
        res.send({ success: "Sua conta foi excluída." });
    } catch (err) {
        return error(
            "Não foi possível excluir sua conta. Tente novamente.",
            500,
            res
        );
    }
}
