import { error } from "../../utils/helpers/validations.js";

export const allowedMimes = {
    get images() {
        const extensions = ["bmp", "jpeg", "png"];

        return extensions.map(extension => `image/${extension}`);
    },
    get videos() {
        const extensions = [
            "mp4",
            "quicktime",
            "x-ms-wmv",
            "x-msvideo",
            "mpeg",
            "ogg",
        ];

        return extensions.map(extension => `video/${extension}`);
    },
};

export const validateMimes = (allowedMimes, file, cb, res) => {
    if (allowedMimes.includes(file.mimetype)) cb(null, true);
    else error("Formato de arquivo inválido.", 400, res);
};

export const handleErrors = ({
    upload,
    customMessages,
    isSingleUpload,
    controllerArgs: { req, res },
}) => {
    const message = (code, singleUploadMessage, multipleUploadMessage) => {
        if (customMessages[code]) return customMessages[code];

        if (isSingleUpload) return singleUploadMessage;
        else return multipleUploadMessage || singleUploadMessage;
    };
    const messages = {
        LIMIT_FILE_SIZE: message(
            "LIMIT_FILE_SIZE",
            "O arquivo é grande demais.",
            "Algum arquivo é grande demais."
        ),
        LIMIT_FILE_COUNT: message(
            "LIMIT_FILE_COUNT",
            "Máximo de arquivos excedido."
        ),
    };
    const executor = resolve => {
        upload(req, res, err => {
            if (err) {
                if (messages[err.code]) return error(messages[err.code], 400, res);

                return error(err.message, 400, res);
            }

            if (!req.file && !req.files.length)
                return error("Nenhum arquivo foi fornecido.", 400, res);

            resolve();
        });
    };

    return new Promise(executor);
};
