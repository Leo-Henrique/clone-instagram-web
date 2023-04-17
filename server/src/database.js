import mongoose from "mongoose";

export default function run() {
    const username = process.env.DB_USER;
    const password = process.env.DB_PASS;

    const uri = `mongodb+srv://${username}:${password}@clone-instagram-web.vw7sksb.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(uri);
}
