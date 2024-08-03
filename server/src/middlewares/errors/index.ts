import { Express } from "express";
import ErrorHandlerMW from "./types";
import notFoundMW from "./notFoundMW";
import handlerMW from "./errorHandlerMW";

const setup = (app: Express): void => {
    app.use(notFoundMW);
    app.use(handlerMW);
};

const errorHandlerMW: ErrorHandlerMW = {
    setup,
};

export default errorHandlerMW;
