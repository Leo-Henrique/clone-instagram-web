const serverPort = 3000;

export const { protocol, hostname, origin } = location;

export const SERVER_DOMAIN =
    hostname === "localhost" ? `${protocol}//${hostname}:${serverPort}` : origin;
