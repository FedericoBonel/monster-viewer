import { DailyScheduleOutput, LessonListOutput } from "../../dtos/lessons";

/** Abstraction of the lessons services */
export default interface LessonsServices {
    /** 
     * Gets the daily schedules by studio for a date 
     * @param date The date from which get the daily schedule list
     */
    getDailyScheduleAllStudios(
        date: Date
    ): Promise<DailyScheduleOutput<LessonListOutput>>;
}
