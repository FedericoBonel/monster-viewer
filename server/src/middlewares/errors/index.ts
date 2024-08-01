import { Express } from "express";
import SetupErrorMW from "./types";
import notFoundMW from "./notFoundMW";
import errorHandlerMW from "./errorHandlerMW";

const setup = (app: Express): void => {
    app.use(notFoundMW);
    app.use(errorHandlerMW);
};

const errorHandlingSetUp: SetupErrorMW = {
    setup,
};

export default errorHandlingSetUp;
