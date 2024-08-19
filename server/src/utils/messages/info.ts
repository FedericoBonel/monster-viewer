import { InfoMsgs } from "./types";

const info: InfoMsgs = {
    logHTTPReq: "Incoming request",
    serverStart: (port: number): string => `Server listening in port ${port}`,
    serverStop: "Server shutting down...",
    serverErrorOnStart: (err: Error): string =>
        `An error happened during initialization ${err}`,
    nonDefinedEnvError: (varName: string): string =>
        `Missing environment variable: ${varName}`,
    invalidNumEnvError: (varName: string): string =>
        `The value provided for the ${varName} environment variable should be a number`,
};

export default info;
