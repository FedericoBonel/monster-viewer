import Messages from "./types";
import validationMessages from "./validation";
import httpErrors from "./httpErrors";

const messages: Readonly<Messages> = {
    validation: validationMessages,
    httpErrors,
};

export default messages;
