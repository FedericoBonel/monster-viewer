/** Server configuration variables */
interface ServerConfig {
    /** Port number to be used in the server */
    port: number;
    /** URLs to be configured in the server */
    urls: {
        /** Base URL of the server */
        api: string;
    }
}

/** Server configuration type */
export interface Config {
    /** Server configuration variables */
    server: ServerConfig;
}
