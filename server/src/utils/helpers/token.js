import jwt from "jsonwebtoken";

export default function generateToken(id) {
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: "3d" };

    return jwt.sign({ id }, secret, options);
}