import { Express, RequestHandler } from "express";
import morgan from "morgan";
import httpLogger from "../../utils/logger/httpLogger";
import LoggingMW from "./types";
import messages from "../../utils/messages";

/** HTTP Request proccesing logging middleware */
const morganMiddleware: RequestHandler = morgan(
    (tokens, req, res) =>
        JSON.stringify({
            method: tokens.method(req, res),
            remoteAddr: tokens["remote-addr"](req, res),
            url: tokens.url(req, res),
            status: Number(tokens.status(req, res)),
            contentLength: tokens.res(req, res, "content-length"),
            responseTime: Number.parseFloat(
                tokens["response-time"](req, res) as string | ""
            ),
        }),
    {
        stream: {
            // Configure Morgan to use our custom logger to write to console
            write: (message) => {
                const parsedMessage = JSON.parse(message);
                httpLogger.http(messages.info.logHTTPReq, parsedMessage);
            },
        },
    }
);

const setup = (app: Express): void => {
    app.use(morganMiddleware);
};

const loggingMW: LoggingMW = {
    setup,
};

export default loggingMW;
