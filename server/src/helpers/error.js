export default function error(msg, status, res) {
    return res.status(status).send({ error: msg });
}