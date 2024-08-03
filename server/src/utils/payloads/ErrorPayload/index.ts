import APIError from "../../errors/APIError";
import ErrorPayload from "./ErrorPayload";
import ErrorPayloadExport from "./types";

const createErrorPayload: ErrorPayloadExport = (error: APIError) =>
    new ErrorPayload(error);

export default createErrorPayload;
