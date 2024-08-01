import dotenv from "dotenv";
import { Config } from "./types";

dotenv.config();

/** Checks that the environment variable with the given name exists and returns it. */
const getEnvString = (name: string): string => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};

/** Checks that the environment variable with the given name exists and returns it as a number. */
const getEnvNumber = (name: string): number => {
    const value: string = getEnvString(name);
    const num: number = Number(value);
    if (isNaN(num)) {
        throw new Error(`Invalid number for environment variable: ${name}`);
    }
    return num;
};

const config: Readonly<Config> = {
    server: {
        port: getEnvNumber("PORT"),
        urls: {
            api: getEnvString("BASE_URL"),
        },
    },
};

export default config;
