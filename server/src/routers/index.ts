import { Express } from "express";
import config from "../config";
import constants from "../utils/constants";
import RouterSetup from "./types";
import lessonsRouter from "./lessons";

const configRoutes = (app: Express): void => {
    app.use(
        `${config.server.urls.api}${constants.resources.paths.lessons}${constants.resources.paths.dailySchedule}`,
        lessonsRouter
    );
};

const routerSetup: RouterSetup = {
    configRoutes,
};

export default routerSetup;
