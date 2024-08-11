import { Entity } from "../utils/types";
import Studio from "../studios/types";
import Performer from "../performers/types";
import Program from "../programs/types";
import Difficulty from "../difficulties/types";

type DenormalizedStudio = Pick<Studio, "_id" | "name">;
type DenormalizedPerformer = Pick<Performer, "_id" | "name">;
type DenormalizedProgram = Pick<Program, "_id" | "name">;
type DenormalizedDifficulty = Pick<Difficulty, "_id" | "name">;

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
