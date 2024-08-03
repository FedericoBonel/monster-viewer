import { ErrorRequestHandler } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import APIError from "../../utils/errors/APIError";
import createErrorPayload from "../../utils/payloads/ErrorPayload";

/**
 * Middleware that receives all the errors that occur
 * within asynchronous functions on the server
 * and returns them as HTTP responses to the API user
 */
const errorHandlerMW: ErrorRequestHandler = async (
    err: Error | APIError,
    req,
    res,
    next
) => {
    console.error(err.stack ?? "");
    let serverError: APIError = err as APIError;

    // If the error wasn't defined  by us, we create a generic server error
    if (!serverError.httpStatus) {
        serverError = new APIError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            err.message || ReasonPhrases.INTERNAL_SERVER_ERROR
        );
    }

    res.status(serverError.httpStatus).json(createErrorPayload(serverError));
};

export default errorHandlerMW;
