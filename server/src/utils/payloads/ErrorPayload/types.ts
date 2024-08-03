import APIError from "../../errors/APIError";
import { ValidationError } from "../../errors/BadRequestError/types";
import { ApiResPayload } from "../ApiResPayload";

/** Abstraction of an erroneous response's data structure */
export interface ErrorPayloadData {
    /** The error message. Every error has this. */
    errorMsg: string;
    /** Optional extra details explaining the error. Useful for validation of fields. */
    errorDetails?: Array<ValidationError>;
}

/** Abstraction of the error payload package exports */
export default interface ErrorPayloadExport {
    /** Creates a new erronous payload */
    (errorMsg: APIError): ApiResPayload<ErrorPayloadData>;
}
