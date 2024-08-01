import { Express } from "express";
import { Server } from "http";
import "express-async-errors";
import appFactory from "./app";
import config from "./config";

/** Initializes the server */
const startServer = async (): Promise<Server | never> => {
    let server: Server;
    // Try to initialize server and any other connections required
    // If an error happens close the process
    try {
        const app: Express = appFactory.createApp();
        server = app.listen(config.server.port, () => {
            console.log(`Server listening in port ${config.server.port}`);
        });
    } catch (error) {
        console.error(`An error happened during initialization ${error}`);
        process.exit(1);
    }
    return server;
};

startServer().then((server: Server): void => {
    // Attach on close event handler
    process.on("SIGTERM", (): void => {
        console.log("Server shutting down...");
        if (server) server.close();
    });
});
