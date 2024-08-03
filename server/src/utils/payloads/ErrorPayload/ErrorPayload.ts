import { StatusCodes } from "http-status-codes";
import APIError from "../../errors/APIError";
import { ApiResPayloadImpl } from "../ApiResPayload";
import { ErrorPayloadData } from "./types";
import BadRequestError from "../../errors/BadRequestError";

/** Abstraction of an erroneous response's payload. It receives an API error and formats it as it should be exposed in a response. */
class ErrorPayload extends ApiResPayloadImpl<ErrorPayloadData> {
    constructor(data: APIError) {
        let formattedData: ErrorPayloadData = {
            errorMsg: data.message,
        };
        // If the error is bad request some fields may be wrong,
        // check if the error contains an errors property and add them to the response
        if (data.httpStatus === StatusCodes.BAD_REQUEST) {
            let badRequest: BadRequestError = data as BadRequestError;
            formattedData.errorDetails = badRequest.errors.map((err) => err);
        }

        super(false, formattedData);
    }
}

export default ErrorPayload;
