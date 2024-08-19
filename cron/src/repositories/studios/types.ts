import Studio from "../../models/studios/types.js";

/** Repository to store studios */
export default interface StudiosRepositories {
    /** Saves new studios or updates them based on their name to find and update */
    upsertMany(studios: Iterable<Studio>): Promise<void>;
    /** Gets all stored studios */
    getAll(): Promise<Studio[]>;
}
