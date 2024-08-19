/** Configuration of database variables */
interface DBConfig {
    /** Database connection string */
    url: string;
}

/** Server configuration type */
export interface Config {
    /** Database configuration variables */
    db: DBConfig;
    /** Bmonster configuration variables */
    bmon: {
        /** Bmonster credentials */
        credentials: {
            /** Bmonster email */
            email: string;
            /** Bmonster password */
            password: string;
        };
    };
}
