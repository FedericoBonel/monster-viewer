import Config from "./types";
import messages from "@/utils/constants/messages";

/** Checks that the environment variable with the given name exists and returns it. */
const getEnvString = (name: string): string => {
    const value = import.meta.env[name] as string | undefined;
    if (!value) {
        throw new Error(messages.console.errors.nonDefinedEnv(name));
    }
    return value;
};

const config: Readonly<Config> = {
    apis: {
        bmonster: {
            baseUrl: getEnvString("VITE_API_BASE_URL"),
        },
    },
};

export default config;
