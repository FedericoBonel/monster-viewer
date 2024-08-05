import Lesson from "../../models/lessons/types";

/** Abstraction of the lessons repository */
export default interface LessonsRepository {
    /**
     * Gets the lessons grouped by studio for a specific date
     * @param date The date from which get the lessons
     */
    getLessonsByTimeGroupByStudio(date: Date): Promise<{
        [studioName: string]: Array<Lesson>;
    }>;
}
