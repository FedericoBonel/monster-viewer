import LessonListOutput from "../LessonListOutput";
import Lesson from "../../../models/lessons/types";

/** Abstraction of the export structure of the lessons transformers */
export default interface LessonsTransformers {
    /** Transforms a lesson as it is stored as how it should be exposed in a list*/
    toLessonListOutput(storedLesson: Lesson): LessonListOutput;
}
