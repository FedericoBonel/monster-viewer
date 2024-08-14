import { Dayjs } from "dayjs";
import { UseQueryResult } from "@tanstack/react-query";
import LessonItem from "@/apis/dtos/lessons/LessonItem";

/** The services to interact with the lessons persistance layer */
export default interface LessonsServices {
    /** Returns the query state that gets the daily schedule grouped by studios for the specific provided date */
    useDailySchedule(
        selectedDate: Dayjs
    ): UseQueryResult<Record<string, LessonItem[]>>;
}
