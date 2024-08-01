import express, { Express, json, urlencoded } from "express";
import errorHandlingSetUp from "./middlewares/errors";
import routerSetup from "./routers";
import config from "./config";

interface AppFactory {
    createApp(): Express;
}

const appFactory: AppFactory = {
    createApp() {
        const app: Express = express();
        app.use(json());
        app.use(urlencoded({ extended: true }));
        
        // Set the number of trusted proxies
        app.set("trust proxy", config.server.proxies.maxTrusted);

        // Routes configuration
        routerSetup.configRoutes(app);

        // Error handling configuration
        errorHandlingSetUp.setup(app);

        return app;
    },
};

export default appFactory;
