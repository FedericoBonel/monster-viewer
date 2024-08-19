import dotenv from "dotenv";
import { Config } from "./types.js";

dotenv.config();

/** Checks that the environment variable with the given name exists and returns it. */
const getEnvString = (name: string): string => {
    const value = process.env[name];
    if (!value) {
        throw new Error(
            `The environment variable ${name} is not defined. Please define it and try again.`
        );
    }
    return value;
};

const config: Readonly<Config> = {
    db: {
        url: getEnvString("DB_URL"),
    },
    bmon: {
        credentials: {
            email: getEnvString("BMON_EMAIL"),
            password: getEnvString("BMON_PASSWORD"),
        },
    },
};

export default config;
