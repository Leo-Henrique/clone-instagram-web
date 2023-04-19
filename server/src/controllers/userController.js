import User from "../models/userModel.js";
import { error, requiredFields, validateFields } from "../utils/helpers/validations.js";

export const update = async (req, res) => {
    const values = Object.values(req.body);

    try {
        if (!values.length)
            return error("Forneça alguma informação para ser alterada.", 400, res);

        if (values.filter((value) => !value).length)
            return error(
                "Um campo não pode estar vazio para ser alterado.",
                400,
                res
            );
        
        const validate = validateFields(req, res);

        if (validate) return validate();

        const user = await User.findByIdAndUpdate(
            req.userId, 
            req.body, 
            { new: true }
        );

        res.send(user);
    } catch (err) {
        return error(
            "Não foi possível fazer as alterações. Tente novamente mais tarde.",
            500,
            res
        );
    }
};

