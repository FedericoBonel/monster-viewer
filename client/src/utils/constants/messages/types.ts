/** Messages to be shown to the user */
interface Messages {
    /** Console messages */
    console: {
        /** Errors to be shown in console */
        errors: {
            /** Creates the error to be shown when a required env variable is not defined */
            nonDefinedEnv: (varName: string) => string;
        };
    };
    /** Date picker messages */
    datePicker: {
        /** Returns the label for the date picker */
        label: string;
    };
    /** Error page messages */
    errorPage: {
        /** General error messages */
        general: {
            /** General error page header */
            header: string;
            /** General error page description */
            body: string;
            /** General error page go back button */
            goBack: string;
        };
        /** Too many requests error (Rate limit reached) */
        429: {
            /** Too many requests error header */
            header: string;
            /** Too many requests error description */
            body: string;
            /** General error page go back button */
            goBack: string;
        };
    };
}

export default Messages;
