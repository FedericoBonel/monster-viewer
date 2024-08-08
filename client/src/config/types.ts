/** Configuration environment variables */
interface Config {
    /** Third party API related variables */
    apis: {
        /** Variables related with bmonster API */
        bmonster: {
            /** The api base url */
            baseUrl: string;
        };
    };
}

export default Config;
