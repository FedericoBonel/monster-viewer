import Performer from "../../models/performers/types.js";

/** Repository to store performers */
export default interface PerformersRepositories {
    /** Saves new performers or updates them based on their name to find and update */
    upsertMany(performers: Iterable<Performer>): Promise<void>;
    /** Gets all stored performers */
    getAll(): Promise<Performer[]>;
}
