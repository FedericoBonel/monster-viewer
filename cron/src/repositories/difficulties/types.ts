import Difficulty from "../../models/difficulties/types.js";

/** Repository to store difficulties */
export default interface DifficultiesRepositories {
    /** Saves new difficulties or updates them based on their name to find and update */
    upsertMany(difficulties: Iterable<Difficulty>): Promise<void>;
    /** Gets all stored difficulties */
    getAll(): Promise<Difficulty[]>;
}
