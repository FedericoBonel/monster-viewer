"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
/** Initializes the server */
const startServer = async () => {
    let server;
    // Try to initialize server and any other connections required
    // If an error happens close the process
    try {
        const app = app_1.default.createApp();
        server = app.listen(config_1.default.server.port, () => {
            console.log(`Server listening in port ${config_1.default.server.port}`);
        });
    }
    catch (error) {
        console.error(`An error happened during initialization ${error}`);
        process.exit(1);
    }
    return server;
};
startServer().then((server) => {
    // Attach on close event handler
    process.on("SIGTERM", () => {
        console.log("Server shutting down...");
        if (server)
            server.close();
    });
});
