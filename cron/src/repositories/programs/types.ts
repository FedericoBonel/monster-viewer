import Program from "../../models/programs/types.js";

/** Repository to store Program */
export default interface ProgramRepositories {
    /** Saves new program or updates them based on their name to find and update */
    upsertMany(program: Iterable<Program>): Promise<void>;
    /** Gets all stored programs */
    getAll(): Promise<Program[]>;
}
