import multer from "multer";
import storage from "../storage.js";
import { allowedMimes, handleErrors, validateMimes } from "../validation.js";

export default function uploadProfilePicture(fieldName, req, res) {
    const MBLimit = 10;
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
        },
        controllerArgs: { req, res },
    });
}
