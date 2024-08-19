import { createLogger, format, Logger, transports } from "winston";

const { combine, timestamp, errors, cli } = format;

const consoleTransports: transports.ConsoleTransportInstance =
    new transports.Console();

/** The logger to be used in the application */
const logger: Logger = createLogger({
    level: "silly",
    format: combine(
        // Logging format for console
        cli({ level: true }),
        // Logging for errors with stack
        errors({ stack: true })
    ),
    transports: [consoleTransports],
    exceptionHandlers: [consoleTransports],
    rejectionHandlers: [consoleTransports],
});

export default logger;
