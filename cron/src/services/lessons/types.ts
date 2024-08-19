import { ScrapedLesson } from "@/scrapers/bmonster/types.js";

export default interface LessonsServices {
    /** Saves all scraped lessons in persistance layer */
    saveAll(lessons: ScrapedLesson[]): Promise<void>;
}
