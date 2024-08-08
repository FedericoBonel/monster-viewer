import Messages from "./types";

const messages: Readonly<Messages> = {
    console: {
        errors: {
            nonDefinedEnv: (varName: string): string =>
                `Missing environment variable: ${varName}`,
        },
    },
};

export default messages;
