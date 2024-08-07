import express, { Express, json, urlencoded } from "express";
import securityMW from "./middlewares/security";
import loggingMW from "./middlewares/logging";
import errorHandlerMW from "./middlewares/errors";
import routerSetup from "./routers";
import config from "./config";
import compression from "compression";

interface AppFactory {
    createApp(): Express;
}

const appFactory: AppFactory = {
    createApp() {
        const app: Express = express();
        app.use(compression());
        app.use(json());
        app.use(urlencoded({ extended: true }));

        // Setup the security middleware
        securityMW.setup(app);

        // Set the number of trusted proxies
        app.set("trust proxy", config.server.proxies.maxTrusted);

        // Set up the HTTP logger
        loggingMW.setup(app);

        // Routes configuration
        routerSetup.configRoutes(app);

        // Error handling configuration
        errorHandlerMW.setup(app);

        return app;
    },
};

export default appFactory;
