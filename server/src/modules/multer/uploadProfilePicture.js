import multer from "multer";
import { allowedMimes, handleErrors, storage, validateMimes } from "./config.js";

export default function uploadProfilePicture(fieldName, req, res) {
    const MBLimit = 5;
    const upload = multer({
        storage,
        fileFilter: (req, file, cb) =>
            validateMimes(allowedMimes.images, file, cb, res),
        limits: { fileSize: MBLimit * 1024 * 1024 },
    }).single(fieldName);

    return handleErrors({
        upload,
        customMessages: {
            LIMIT_FILE_SIZE: `Envie uma imagem com menos de ${MBLimit}MB.`,
            LIMIT_FILE_COUNT: `Você só pode enviar no máximo ${fileLimit} arquivos.`,
        },
        controllerArgs: { req, res },
    });
}
