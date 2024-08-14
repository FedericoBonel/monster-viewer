import LessonItem from "../dtos/lessons/LessonItem";
import SuccessfulResponse from "../dtos/responses/SuccessfulResponse";

/** API to interact with the back end to manage lessons */
export default interface LessonsAPI {
    /** Gets the daily schedule grouped by studios for the specific provided date */
    getDailySchedule(
        selectedDate: Date
    ): Promise<SuccessfulResponse<Record<string, LessonItem[]>>>;
}
