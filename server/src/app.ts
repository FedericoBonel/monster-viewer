import express, { Express } from "express";
import routerSetup from "./routers";

interface AppFactory {
    createApp(): Express;
}

const appFactory: AppFactory = {
    createApp() {
        const app: Express = express();
        routerSetup.configRoutes(app);
        return app;
    },
};

export default appFactory;
