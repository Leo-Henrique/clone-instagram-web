import User from "../../models/userModel.js";
import { error } from "../../utils/helpers/validations.js";
import { defaultPicture } from "../../models/userModel.js";
import fs from "fs";
import { uploadUserPicture } from "../../modules/multer/uploads.js";

export const newProfilePicture = async (req, res) => {
    try {
        const { path } = await uploadUserPicture("picture", req, res);

        await User.findByIdAndUpdate(req.userId, { picture: path });

        res.send({ source: path });
    } catch (err) {
        if (typeof err === "string")
            return error(err, 400, res);
        else
            return error(
                "Não foi possível adicionar uma foto de perfil. Tente novamente mais tarde.",
                500,
                res
            );
    }
};

export const deleteProfilePicture = async (req, res) => {
    try {
        const { picture } = await User.findByIdAndUpdate(req.userId, {
            picture: defaultPicture,
        });

        fs.unlinkSync(picture);
        res.send({ source: defaultPicture });
    } catch (err) {
        return error(
            "Não foi possível remover sua foto de perfil. Tente novamente mais tarde.",
            500,
            res
        );
    }
};
