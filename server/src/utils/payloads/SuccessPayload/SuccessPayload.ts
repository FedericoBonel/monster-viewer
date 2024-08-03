import { ApiResPayloadImpl } from "../ApiResPayload";

/** Abstraction of a successful response's payload. It receives an any data and formats it as it should be exposed in a response. */
class SuccessPayload<T> extends ApiResPayloadImpl<T> {
    constructor(data: T) {
        super(true, data);
    }
}

export default SuccessPayload;
