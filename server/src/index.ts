import { Express } from "express";
import { Server } from "http";
import "express-async-errors";
import appFactory from "./app";
import config from "./config";
import logger from "./utils/logger";
import messages from "./utils/messages";

/** Initializes the server */
const startServer = async (): Promise<Server | never> => {
    let server: Server;
    // Try to initialize server and any other connections required
    // If an error happens close the process
    try {
        const app: Express = appFactory.createApp();
        server = app.listen(config.server.port, () => {
            logger.info(messages.info.serverStart(config.server.port));
        });
    } catch (error) {
        logger.error(messages.info.serverErrorOnStart(error as Error));
        process.exit(1);
    }
    return server;
};

startServer().then((server: Server): void => {
    // Attach on close event handler
    process.on("SIGTERM", (): void => {
        logger.info(messages.info.serverStop);
        if (server) server.close();
    });
});
