import mongoose from "mongoose";
import config from "../../config";

/**
 * Initializes connection with database
 * @param url URL connection string for server. Must include authentication information and database.
 * @returns Conection promise
 */
export default async (url: string): Promise<void> => {
    await mongoose.connect(url, {
        // Only generate indexes if in development
        autoIndex: config.env === "development",
    });
};
