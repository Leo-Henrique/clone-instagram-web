import multer from "multer";
import crypto from "crypto";
import path from "path";
import url from "url";

export const storage = multer.diskStorage({
    destination: "/tmp",
    filename: (req, file, cb) => {
        const hash = crypto.randomBytes(20).toString("hex");
        const ext = path.extname(file.originalname);
        const name = `${Date.now()}-${hash}${ext}`;

        cb(null, name);
    },
});

export const filter = (type, subtypes) => {
    const allowedMimes = () => {
        if (type) return subtypes.map(mime => `${type}/${mime}`);
        else return subtypes;
    };

    return (req, file, cb) => {
        if (allowedMimes().includes(file.mimetype)) cb(null, true);
        else cb(new Error("Invalid format"));
    };
};

export const handleErrors = (callback, req, res, messages) => {
    return new Promise((resolve, reject) => {
        const validate = err => {
            if (!err && !req.file && !req.files.length)
                reject("Nenhum arquivo foi fornecido.");

            switch (err && err.message) {
                case "Invalid format":
                    reject("O formato do arquivo não é permitido.");
                case "File too large":
                    reject(messages.fileSize);
                case "Too many files":
                    reject(
                        messages.fileLimit
                            ? messages.fileLimit
                            : "Máximo de arquivos excedido."
                    );
                default:
                    resolve(req.file ? req.file : req.files);
            }
        };

        callback(req, res, validate);
    });
};
