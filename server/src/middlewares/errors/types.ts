import { Express } from "express";

/** Sets up the error handling middleware */
interface ErrorHandlerMW {
    /** Sets up the error handling middleware in the server application */
    setup(app: Express): void;
}

export default ErrorHandlerMW;
