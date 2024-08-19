/** Constants that create or contain the urls to scrape from */
interface ScrapingURLs {
    /** 
     * Creates the weekly lessons url for a given studio 
     * 
     * @param date - The date from which to get the weekly schedule
     * @param studioId - The id of the studio from which to get the weekly schedule
     */
    getWeeklyLessonsByStudio(date: Date, studioId: number): string;
}

export default ScrapingURLs;