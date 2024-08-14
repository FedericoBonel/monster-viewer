export default interface LessonsCaches {
    /**
     * Main cache. Affects all lessons
     */
    all: string[];
    /**
     * The cache key for all lessons lists.
     */
    lists: () => string[];
    /**
     * Returns the cache key for a daily schedule of lessons grouped by studios.
     *
     * @param selectedDate The date from which get the daily schedules
     */
    dailySchedule: (selectedDate: string) => string[];
}
