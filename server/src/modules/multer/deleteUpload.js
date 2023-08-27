import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import isLocalApp from "../../utils/helpers/isLocalApp.js";
import { s3 } from "./storage.js";

const deleteCommand = Key =>
    new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key,
    });

export default function deleteUpload(path, key) {
    if (isLocalApp) return new Promise(resolve => {
        const devServer = `http://localhost:${process.env.SERVER_PORT}/`;

        fs.unlinkSync(path.replace(devServer, ""));
        resolve();
    });

    return s3.send(deleteCommand(key));
}
