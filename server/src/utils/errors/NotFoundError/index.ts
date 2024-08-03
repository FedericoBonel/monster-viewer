import { StatusCodes, ReasonPhrases } from "http-status-codes";
import APIError from "../APIError";

/**
 * Abstraction of an error of type Not Found,
 * sets the http status of the error to 404.
 * These errors are due to the fact that the request has requested access to a non-existent resource.
 */
export default class NotFoundError extends APIError {
    /**
     * Constructs a new API error of type Not Found to flag requests that have requested access to a non-existent resource.
     * @param message Optional message explaining the error, if not provided it is set to "Not Found!"
     */
    constructor(public readonly message: string = ReasonPhrases.NOT_FOUND) {
        super(StatusCodes.NOT_FOUND, message);
    }
}
