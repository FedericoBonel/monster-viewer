import scrapeLessons from "@/scrapers/bmonster/scrapeLessons.js";
import { ScrapedLesson } from "@/scrapers/bmonster/types.js";
import logger from "@/utils/logger/index.js";
import lessonsServices from "./services/lessons/index.js";

/** Scrapes the data from the bmonster pages and stores it in database */
const startScrapeAndStoreJob = async (): Promise<void> => {
    // Scrape the lessons
    const lessons: ScrapedLesson[] = await scrapeLessons();

    logger.info(
        `Scraped the lessons from website, got ${lessons.length} lessons`
    );

    // Save them in persistance layer
    await lessonsServices.saveAll(lessons);

    logger.info("Saved scraped data in database");
};

export default startScrapeAndStoreJob;
