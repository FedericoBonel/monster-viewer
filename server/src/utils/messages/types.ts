/** Messages to be shown during validation errors of inputs */
export interface ValidationMessages {
    /** Messages related with pagination */
    pagination: {
        /** Error to be shown when page query param is invalid */
        page: string;
        /** Error to be shown when limit query param is invalid */
        limit: string;
    };
    /** Messages related with lessons */
    lessons: {
        /** Error to be shown when the date from which to search query param is invalid */
        date: string;
    };
    /** General error message to be returned from API when validation fails in MW validators */
    general: string;
}

/** General HTTP errors */
export interface HTTPErrors {
    /** Basic route not found error */
    notFound: string;
}

/** General info messages */
export interface InfoMsgs {
    /** Creates message to be shown when starting server */
    serverStart: (port: number) => string;
    /** Message to be shown when stopping server */
    serverStop: string;
    /** Creates message to be shown when an error happens on server startup */
    serverErrorOnStart: (err: Error) => string;
    /** Creates message to be shown when a required environment variable isn't defined */
    nonDefinedEnvError: (varName: string) => string;
    /** Creates message to be shown when an environment variable that should be a number is not a number */
    invalidNumEnvError: (varName: string) => string;
    /** Message to be shown when logging an HTTP request */
    logHTTPReq: string;
}

/** Messages to be shown/returned */
interface Messages {
    /** Messages to be shown during validation errors of inputs */
    validation: ValidationMessages;
    /** General HTTP errors to be returned */
    httpErrors: HTTPErrors;
    /** General info messages */
    info: InfoMsgs;
}

export default Messages;
