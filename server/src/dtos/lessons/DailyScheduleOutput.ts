/** Structure of how a daily schedule by studio should be exposed to the web */
export default interface DailyScheduleOutput<LessonStructure> {
    /** The keys should hold the name of the studio and the value the list of lessons for the date */
    [studioName: string]: Array<LessonStructure>
}
