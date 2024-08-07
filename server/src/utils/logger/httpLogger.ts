import { createLogger, format, transports, Logger } from "winston";
import config from "../../config";

const { combine, timestamp, json } = format;

/** The logger to be used in the application to log HTTP requests */
const httpLogger: Logger = createLogger({
    level: config.server.logging.level,
    format: combine(timestamp(), json({ space: 2 })),
    transports: [new transports.Console()],
});

export default httpLogger;
