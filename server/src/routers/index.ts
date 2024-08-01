import { Express, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import config from "../config";
import constants from "../utils/constants";
import RouterSetup from "./types";
import lessonsRouter from "./lessons";

const configRoutes = (app: Express): void => {
    app.use(
        `${config.server.urls.api}${constants.resources.paths.lessons}`,
        lessonsRouter
    );
    app.use(async (req: Request, res: Response): Promise<void> => {
        res.status(StatusCodes.NOT_FOUND).send();
    });
};

const routerSetup: RouterSetup = {
    configRoutes,
};

export default routerSetup;
