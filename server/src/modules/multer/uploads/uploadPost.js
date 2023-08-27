import multer from "multer";
import { error, types } from "../../../utils/helpers/validations.js";
import storage from "../storage.js";
import { allowedMimes, handleErrors, validateMimes } from "../validation.js";

export default function uploadPost(fieldName, req, res) {
    const MBLimit = 50;
    const fileLimit = 10;
    const upload = multer({
        storage,
        fileFilter: (req, ...rest) => {
            const { legend } = req.body;

            if (legend && !legend.match(types.postLegend.regex))
                return error(types.postLegend.message, 400, res);

            validateMimes(
                [...allowedMimes.images, ...allowedMimes.videos],
                ...rest,
                res
            );
        },
        limits: {
            fileSize: MBLimit * 1024 * 1024,
            files: fileLimit,
        },
    }).array(fieldName);

    return handleErrors({
        upload,
        customMessages: {
            LIMIT_FILE_SIZE: `Cada arquivo deve ter no máximo ${MBLimit}MB.`,
            LIMIT_FILE_COUNT: `Você só pode enviar no máximo ${fileLimit} arquivos.`,
        },
        controllerArgs: { req, res },
    });
}
