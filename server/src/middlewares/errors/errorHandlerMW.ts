import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

/**
 * Middleware that receives all the errors that occur
 * within asynchronous functions on the server
 * and returns them as HTTP responses to the API user
 */
const errorHandlerMW = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: Implement actual error handling
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err.message);
};

export default errorHandlerMW;
