import puppeteer, { Browser } from "puppeteer";
import logger from "@/utils/logger/index.js";
import scrapeLessonsByDate from "./scrapeLessonsByDate.js";
import { ScrapedLesson } from "./types.js";
import login from "./login.js";
import config from "@/config/index.js";
import { StudiosIDs } from "@/utils/constants/studios.js";

/** Scrapes the lessons for the next two weeks for all studios and returns them */
async function scrapeLessons(): Promise<ScrapedLesson[]> {
    // Launch the browser
    const browser = await puppeteer.launch();

    // Login into the users account in the browser to get all lessons
    login(
        browser,
        config.bmon.credentials.email,
        config.bmon.credentials.password
    );

    // Scrape the lessons by studio
    const lessonsByStudio: ScrapedLesson[][] = await Promise.all(
        StudiosIDs.map((studioId) =>
            scrapeLessonsByStudio(Number(studioId), browser)
        )
    );

    return lessonsByStudio.flat();
}

/** Scrapes the lessons for a given studio for the next two weeks using the browser and returns them */
const scrapeLessonsByStudio = async (studioId: number, browser: Browser) => {
    // Get todays date
    const today = new Date();
    // Get next weeks date
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    logger.debug(
        `Studio ${studioId} - Scraping lessons for dates ${today} and ${nextWeek}`
    );

    // Scrape the lessons for both this week and next week
    const result: ScrapedLesson[][] = await Promise.all(
        [today, nextWeek].map((date) =>
            scrapeLessonsByDate(studioId, browser, date)
        )
    );

    logger.debug(`Studio ${studioId} - Lessons scraped!`);

    return result.flat();
};

export default scrapeLessons;
