import multer from "multer";
import { storage, filter, handleErrors } from "./config.js";

const imagesFormat = ["bmp", "jpeg", "png"];
const videosFormat = [
    "mp4",
    "quicktime",
    "x-ms-wmv",
    "x-msvideo",
    "video/mpeg",
    "video/ogg",
];

export const uploadUserPicture = (fieldName, req, res) => {
    const MBLimit = 5;
    const config = multer({
        storage,
        fileFilter: filter("image", imagesFormat),
        limits: { fileSize: MBLimit * 1024 * 1024 },
    }).single(fieldName);
    const messages = { fileSize: `Envie uma imagem com menos de ${MBLimit}MB.` };

    return handleErrors(config, req, res, messages);
};

export const uploadPost = (fieldName, req, res) => {
    const filters = () => {
        const imagesMimes = imagesFormat.map(item => `image/${item}`);
        const videosMimes = videosFormat.map(item => `video/${item}`);

        return [...imagesMimes, ...videosMimes];
    };
    const MBLimit = 100;
    const fileLimit = 10;
    const config = multer({
        storage,
        fileFilter: filter(null, filters()),
        limits: {
            fileSize: MBLimit * 1024 * 1024,
            files: fileLimit,
        },
    }).array(fieldName);
    const messages = {
        fileSize: `Um único arquivo pode ter no máximo ${MBLimit}MB.`,
        fileLimit: `Você só pode enviar no máximo ${fileLimit} arquivos.`,
    };

    return handleErrors(config, req, res, messages);
};
