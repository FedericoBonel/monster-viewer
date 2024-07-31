interface ServerConfig {
    /** Port number to be used in the server */
    readonly port: number;
}

/** Server configuration type */
export interface Config {
    /** Server configuration variables */
    readonly server: ServerConfig;
}
