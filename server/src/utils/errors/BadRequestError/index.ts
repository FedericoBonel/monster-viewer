import { StatusCodes, ReasonPhrases } from "http-status-codes";
import APIError from "../APIError";
import { ValidationError } from "./types";

/**
 * Abstraction of a Bad Request error,
 * sets the http status of the error to 400.
 *
 * These errors are triggered when there is something wrong with the request and the user should fix it.
 */
export default class BadRequestError extends APIError {
    /**
     * Constructs a new API error of type Bad Request to mark requests that were incorrect for some reason.
     * @param message Optional message explaining the error, if not provided it is set to "Bad Request"
     * @param errors Optional attribute containing the fields of the request that are incorrect.
     */
    constructor(
        public readonly message: string = ReasonPhrases.BAD_REQUEST,
        public readonly errors: ReadonlyArray<ValidationError> = []
    ) {
        super(StatusCodes.BAD_REQUEST, message);
    }
}
