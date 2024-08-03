import { Express } from "express";
import SecurityMW from "./types";
import helmet from "helmet";
import cors from "cors";
import rateLimiter from "express-rate-limit";
import config from "../../config";

const setup = (app: Express): void => {
    app.use(helmet());
    app.use(cors());
    app.use(rateLimiter({
        windowMs: config.server.rateLimit.minWindow * 1000 * 60,
        limit: config.server.rateLimit.maxWindow,
        standardHeaders: true,
        legacyHeaders: true,
    }))
};

const securityMW: SecurityMW = {
    setup,
};

export default securityMW;
