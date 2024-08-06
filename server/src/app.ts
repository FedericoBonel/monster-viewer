import express, { Express, json, urlencoded } from "express";
import errorHandlerMW from "./middlewares/errors";
import securityMW from "./middlewares/security";
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

        // Routes configuration
        routerSetup.configRoutes(app);

        // Error handling configuration
        errorHandlerMW.setup(app);

        return app;
    },
};

export default appFactory;
