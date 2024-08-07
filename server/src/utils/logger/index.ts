import { createLogger, format, Logger, transports } from "winston";
import config from "../../config";

const { combine, timestamp, metadata, json, errors } = format;

const consoleTransports: transports.ConsoleTransportInstance =
    new transports.Console();

/** The logger to be used in the application */
const logger: Logger = createLogger({
    level: config.server.logging.level,
    format: combine(
        // Logging for errors with stack
        errors({ stack: true }),
        // Add extra metadata that the log could have sent
        metadata(),
        // Add a timestamp
        timestamp(),
        // Parse everything as json with 2 spaces for readability
        json({ space: 2 })
    ),
    transports: [consoleTransports],
    exceptionHandlers: [consoleTransports],
    rejectionHandlers: [consoleTransports],
});

export default logger;
