import { Express } from "express";

/** Sets up the security and ratelimiting middleware */
interface SecurityMW {
    /** Sets up the security and ratelimiting middleware in the server application */
    setup(app: Express): void;
}

export default SecurityMW;
