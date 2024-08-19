/** Constants related to studios */
export default interface StudiosConstants {
    /** The names of every studio */
    studios: string[],
    /** The max planned schedules for lessons by studio for each day */
    plannedScheduleByStudio: Record<string, string[]>
    /** Duration of a lesson in minutes */
    lessonDuration: number
}