import { ApiResPayload } from "./types";

/** Implementation of response payload abstraction */
class ApiResPayloadImpl<T> implements ApiResPayload<T> {
    constructor(public readonly success: boolean, public readonly data: T) {}
}

export default ApiResPayloadImpl;
