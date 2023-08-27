import User from "../../models/userModel.js";
import uploadProfilePicture from "../../modules/multer/uploads/uploadProfilePicture.js";
import { error } from "../../utils/helpers/validations.js";
import deleteUpload from "../../modules/multer/deleteUpload.js";

export const newProfilePicture = async (req, res) => {
    const { file } = req;

    try {
        await uploadProfilePicture("picture", req, res);

        const { picture } = await User.findByIdAndUpdate(req.userId, {
            picture: {
                key: file.key,
                source: file.location,
            },
        });

        res.send(picture);
    } catch {
        return error(
            "Não foi possível adicionar uma foto de perfil. Tente novamente.",
            500,
            res
        );
    }
};

export const deleteProfilePicture = async (req, res) => {
    try {
        const { picture } = await User.findById(req.userId);

        await deleteUpload(picture.source, picture.key);

        res.send(picture);
    } catch {
        return error(
            "Não foi possível remover sua foto de perfil. Tente novamente.",
            500,
            res
        );
    }
};
