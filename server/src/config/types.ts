/** Server configuration variables */
interface ServerConfig {
    /** Port number to be used in the server */
    port: number;
    /** URLs to be configured in the server */
    urls: {
        /** Base URL of the server */
        api: string;
    },
    /** Configuration variables related to proxies handling in server */
    proxies: {
        /** The number of proxies the application trusts */
        maxTrusted: number
    }
    /** Configuration of rate limiting */
    rateLimit: {
        /** Window of minutes for which count the number of connections from a client */
        minWindow: number,
        /** Maximum number of connection from a client in a window before rate limiting the client. */
        maxWindow: number,
    }
}

/** Server configuration type */
export interface Config {
    /** Server configuration variables */
    server: ServerConfig;
}
