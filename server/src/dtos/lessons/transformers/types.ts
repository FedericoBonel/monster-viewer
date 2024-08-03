import LessonListOutput from "../LessonListOutput";

// TODO: Move this to models when implementing storage and access to database and refactor to add actual values (denormalizations)
export interface LessonEntity {
    /** The studio where the lesson is happeing */
    readonly studio: string;
    /** The performer of the lesson */
    readonly performer: string;
    /** The program of the lesson */
    readonly program: string;
    /** The difficulty of the lesson */
    readonly difficulty: string;
    /** The time of beggining of program */
    readonly time: Date;
}

/** Abstraction of the export structure of the lessons transformers */
export default interface LessonsTransformers {
    /** Transforms a lesson as it is stored as how it should be exposed in a list*/
    toLessonListOutput(storedLesson: LessonEntity): LessonListOutput;
}
