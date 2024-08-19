import mongoose from "mongoose";

/**
 * Initializes connection with database
 * @param url URL connection string for server. Must include authentication information and database.
 * @returns Conection promise
 */
export default async (url: string): Promise<void> => {
    await mongoose.connect(url, { autoIndex: false });
};
