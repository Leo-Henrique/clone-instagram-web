const serverPort = 3000;

export const SERVER_HOST =
    location.hostname === "localhost"
        ? `${location.hostname}:${serverPort}`
        : location.origin;
