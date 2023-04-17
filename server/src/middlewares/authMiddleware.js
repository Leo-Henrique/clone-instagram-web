import jwt from "jsonwebtoken";
import { error } from "../helpers/validations.js";

export default function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return error("Token não fornecido.", 401, res);
    
    const scheme = "Bearer ";
    
    if (!authHeader.startsWith(scheme))
        return error("Formato das credenciais incorreta.", 401, res);

    const token = authHeader.replace(scheme, "");
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return error("Token inválido.", 401, res);

        req.userId = decoded.id;
        next();
    })
}