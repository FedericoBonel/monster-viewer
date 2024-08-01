import { Request, Response } from "express";

/**
 * Middleware that handles all the requests that could not be handled by any existing route
 */
const notFoundMW = async (req: Request, res: Response): Promise<never> => {
    // TODO Add custom errors and use that
    throw new Error("Route not found");
};

export default notFoundMW;
