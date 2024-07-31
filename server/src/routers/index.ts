import { Request, Response } from "express";
import RouterSetup from "./types";

const routerSetup: RouterSetup = {
    configRoutes(app) {
        app.use("", (req: Request, res: Response) => {
            res.send("Hello World!");
        });
    },
};

export default routerSetup;
