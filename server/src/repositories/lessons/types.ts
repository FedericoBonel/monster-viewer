import Lesson from "../../models/lessons/types";

export interface AggregateSchedule {
    _id: {
        studio: string;
    };
    lessons: Lesson[];
}

/** Abstraction of the result of a get lessons by date grouped by studio query */
export interface LessonsByDateGroupedByStudioRes
    extends Record<string, Array<Lesson>> {}

/** Abstraction of the lessons repository */
export default interface LessonsRepository {
    /**
     * Gets the lessons grouped by studio for a specific date
     * @param date The date from which get the lessons
     */
    getLessonsByTimeGroupByStudio(
        date: Date
    ): Promise<LessonsByDateGroupedByStudioRes>;
}
