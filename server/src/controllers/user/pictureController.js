import fs from "fs";
import User, { defaultPicture } from "../../models/userModel.js";
import uploadProfilePicture from "../../modules/multer/uploadProfilePicture.js";
import { error } from "../../utils/helpers/validations.js";

export const newProfilePicture = async (req, res) => {
    try {
        await uploadProfilePicture("picture", req, res);
        await User.findByIdAndUpdate(req.userId, { picture: req.file.path });

        res.send({ source: req.file.path });
    } catch (err) {
        return error(
            "Não foi possível adicionar uma foto de perfil. Tente novamente.",
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
            "Não foi possível remover sua foto de perfil. Tente novamente.",
            500,
            res
        );
    }
};
