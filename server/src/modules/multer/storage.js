import { S3Client } from "@aws-sdk/client-s3";
import crypto from "crypto";
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import isLocalApp from "../../utils/helpers/isLocalApp.js";

export const tmpPath = "tmp";

const filename = ambient => (req, file, cb) => {
    const hash = crypto.randomBytes(20).toString("hex");
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${hash}${ext}`;
    const devServer = `http://localhost:${process.env.SERVER_PORT}`;

    if (ambient === "local") {
        file.key = name;
        file.location = `${devServer}/${tmpPath}/${name}`;
    }

    cb(null, name);
};

export const s3 = new S3Client();

const storage = {
    local: multer.diskStorage({
        destination: isLocalApp ? tmpPath : "/tmp",
        filename: filename("local"),
    }),
    cloud: multerS3({
        s3,
        acl: "public-read",
        key: filename("cloud"),
        bucket: process.env.AWS_BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
    }),
};

export default isLocalApp ? storage.local : storage.cloud;
