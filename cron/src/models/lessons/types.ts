import { Entity } from "../utils/types.js";
import Studio from "../studios/types.js";
import Performer from "../performers/types.js";
import Program from "../programs/types.js";
import Difficulty from "../difficulties/types.js";

export type DenormalizedStudio = Pick<Studio, "_id" | "name">;
export type DenormalizedPerformer = Pick<Performer, "_id" | "name">;
export type DenormalizedProgram = Pick<Program, "_id" | "name">;
export type DenormalizedDifficulty = Pick<Difficulty, "_id" | "name">;

export default interface Lesson extends Entity {
    /** Identifier of the lesson in the bmonster system */
    readonly bmonsterId: string;
    /** The studio where the lesson is happening */
    readonly studio: DenormalizedStudio;
    /** The performer of the lesson */
    readonly performer: DenormalizedPerformer;
    /** The program of the lesson */
    readonly program: DenormalizedProgram;
    /** The difficulty of the lesson */
    readonly difficulty: DenormalizedDifficulty;
    /** The time of program start */
    readonly time: Date;
}
