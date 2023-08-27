import os from "os";

const isLocalApp = os.hostname().includes("local");

export default isLocalApp;
