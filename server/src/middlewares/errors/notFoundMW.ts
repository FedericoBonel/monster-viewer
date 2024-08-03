import { RequestHandler } from "express";
import NotFoundError from "../../utils/errors/NotFoundError";
import messages from "../../utils/messages";

/**
 * Middleware that handles all the requests that could not be handled by any existing route
 */
const notFoundMW: RequestHandler = async (req, res) => {
    throw new NotFoundError(messages.httpErrors.notFound);
};

export default notFoundMW;
