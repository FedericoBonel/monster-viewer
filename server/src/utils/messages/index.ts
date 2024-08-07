import Messages from "./types";
import validationMessages from "./validation";
import httpErrors from "./httpErrors";
import info from "./info";

const messages: Readonly<Messages> = {
    validation: validationMessages,
    httpErrors,
    info,
};

export default messages;
