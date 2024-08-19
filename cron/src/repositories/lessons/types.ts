import Lesson from "../../models/lessons/types.js";

/** Repository to store lessons */
export default interface LessonsRepositories {
    /** Saves new lessons or updates them based on their time and studio to find and update */
    upsertMany(lessons: Iterable<Lesson>): Promise<void>;
}
