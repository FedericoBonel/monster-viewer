import { ApiResPayload } from "../ApiResPayload";

/** Abstraction of the successful payload exports module */
export default interface SuccessPayloadExport {
    <T>(data: T): ApiResPayload<T>;
}
