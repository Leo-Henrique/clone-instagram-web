import multer from "multer";
import crypto from "crypto";
import path from "path";

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        const hash = crypto.randomBytes(20).toString("hex");
        const ext = path.extname(file.originalname);
        const name = `${Date.now()}-${hash}${ext}`;

        cb(null, name);
    }
});

const filter = (type, mimes) => {
    const allowedMimes = mimes.map(mime => `${type}/${mime}`);

    return (req, file, cb) => {
        if (allowedMimes.includes(file.mimetype))
            cb(null, true)
        else
            cb(new Error("Invalid format"))
    }
}

const handleErrors = (callback, req, res) => {
    return new Promise((resolve, reject) => {
        const validate = (err) => {
            if (!err && !req.file) reject("Nenhum arquivo foi fornecido.");

            switch (err && err.message) {
                case "Invalid format":
                    reject("O formato do arquivo não é permitido.");
                case "File too large":
                    reject("O arquivo é grande demais.");
                default: resolve(req.file);
            }
        }

        callback(req, res, validate);
    })
};

export const uploadUserPicture = (req, res) => {
    const config = multer({
        storage,
        fileFilter: filter("image", ["bmp", "jpeg", "png", "webp"]),
        limits: { fileSize: 5 * 1024 * 1024 }
    }).single("picture");

    return handleErrors(config, req, res);
}