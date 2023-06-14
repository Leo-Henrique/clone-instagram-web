import nodemailer from "nodemailer";

export default function transporter() {
    const transport = {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    };

    return nodemailer.createTransport(transport);
}
