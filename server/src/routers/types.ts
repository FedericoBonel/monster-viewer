import { Express } from "express";

/** Router configuration object */
interface RouterSetup {
    /** Sets up the routes for the express application */
    configRoutes(app: Express): void;
}

export default RouterSetup;
