const { hostname, origin } = location;
const devServerPort = 3000;
const devServer = `http://${hostname}:${devServerPort}`;

export const SERVER_DOMAIN = hostname === "localhost" ? devServer : origin;
