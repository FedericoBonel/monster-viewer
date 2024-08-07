import { Express } from "express";

/** Sets up the HTTP logging middleware */
export default interface LoggingMW {
    /** Sets up the HTTP logging middleware in the server application */
    setup(app: Express): void;
}
