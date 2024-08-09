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
}

export default Messages;
