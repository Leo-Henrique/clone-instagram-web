import User, { defaultPicture } from "../../models/userModel.js";
import deleteUpload from "../../modules/multer/deleteUpload.js";
import uploadProfilePicture from "../../modules/multer/uploads/uploadProfilePicture.js";
import { error } from "../../utils/helpers/validations.js";

export const newProfilePicture = async (req, res) => {
    try {
        await uploadProfilePicture("picture", req, res);

        const user = await User.findById(req.userId);
        const { picture } = user;

        if (picture.key !== defaultPicture.key)
            await deleteUpload(picture.source, picture.key);

        picture.key = req.file.key;
        picture.source = req.file.location;
        user.save();

        res.send(picture);
    } catch {
        return error(
            "Não foi possível atualizar sua foto de perfil. Tente novamente.",
            500,
            res
        );
    }
};

export const deleteProfilePicture = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const { picture } = user;

        if (picture.key === defaultPicture.key)
            return error(
                "Não é possível remover a foto de perfil padrão.",
                400,
                res
            );

        await deleteUpload(picture.source, picture.key);

        picture.key = defaultPicture.key;
        picture.source = defaultPicture.source;
        user.save();

        res.send(picture);
    } catch {
        return error(
            "Não foi possível remover sua foto de perfil. Tente novamente.",
            500,
            res
        );
    }
};
