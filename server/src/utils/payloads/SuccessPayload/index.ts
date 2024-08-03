import SuccessPayload from "./SuccessPayload";
import SuccessPayloadExport from "./types";

const createSuccessPayload: SuccessPayloadExport = <T>(data: T) =>
    new SuccessPayload(data);

export default createSuccessPayload;
