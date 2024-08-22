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
    /** Terms, conditions and policies strings */
    terms: {
        /** Terms and conditions about privacy */
        privacy: {
            /** The terms and conditions header for privacy */
            pageHeader: string;
            /** The terms and conditions about privacy for advertisement (adsense) */
            advertisementDistr: {
                /** The terms and conditions about privacy for advertisement (adsense) subheader */
                subHeader: string;
                /** The terms and conditions about privacy for advertisement (adsense) description */
                description: string;
                /** The terms and conditions about privacy for advertisement (adsense) link text */
                link: string;
            };
            /** The terms and conditions about privacy for data collection */
            dataAnalysis: {
                /** The terms and conditions about privacy for data collection subheader */
                subHeader: string;
                /** The terms and conditions about privacy for data collection description */
                description: string;
                /** The terms and conditions about privacy for data collection link text */
                link: string;
            };
        };
    };
    /** Navbar messages */
    navbar: {
        /** Navbar links messages */
        links: {
            /** The link to the lessons by gym page */
            lessonsByGym: string;
            /** The link to the privacy policy and terms page */
            privacy: string;
            /** The link to the tipping/donation page */
            tipping: string;
        };
    };
}

export default Messages;
