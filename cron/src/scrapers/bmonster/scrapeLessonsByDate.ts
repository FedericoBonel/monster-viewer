import { Browser, ElementHandle, Page } from "puppeteer";
import Studios from "@/utils/constants/studios.js";
import scrapingURLs from "@/utils/constants/resources/scrapingURLs.js";
import fromJPHourToDate from "@/utils/dates/fromJPHourToDate.js";
import htmlSelectors from "@/utils/constants/selectors/index.js";
import { ScrapedLesson, ScrapedLessonRaw } from "./types.js";
import logger from "@/utils/logger/index.js";

/** Scrapes the lessons for the current week for the studio and returns them */
async function scrapeLessonsByDate(
    studioId: number,
    browser: Browser,
    date: Date
): Promise<ScrapedLesson[]> {
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080 });
    page.setDefaultNavigationTimeout(120000);

    await page.goto(scrapingURLs.getWeeklyLessonsByStudio(date, studioId), {
        waitUntil: "domcontentloaded",
    });

    // Get the lessons for the week
    await page.waitForSelector(htmlSelectors.lessonsRows);
    const lessonsRows = await page.$$(htmlSelectors.lessonsRows);

    logger.debug(
        `Studio ${studioId} - Date: ${date} - Scraped lessons weekly rows`
    );

    // Extract the data from each lesson (This may contain possible nulls)
    const lessonsGrid: (ScrapedLessonRaw | null)[][] =
        await scrapeLessonGridFrom(lessonsRows, studioId, date);

    logger.debug(
        `Studio ${studioId} - Date: ${date} - Scrapped lesson weekly grid`
    );

    // Extract the ID of each lesson for linking users
    await addIDLessonTo(lessonsGrid, page);

    logger.debug(`Studio ${studioId} - Date: ${date} - Scrapped lessons ids`);

    // Filter out null values
    const lessons = lessonsGrid.flatMap((lessonRow) =>
        lessonRow.filter(
            (lesson) =>
                lesson?.bmonsterId &&
                lesson?.diff &&
                lesson?.perf &&
                lesson?.prog &&
                lesson?.studio &&
                lesson?.time
        )
    ) as ScrapedLesson[];

    await page.close();
    return lessons;
}

/**
 * Scrapes the lesson grid from the lessons rows elements and
 * returns them as a scrapped lesson matrix
 */
async function scrapeLessonGridFrom(
    lessonsRows: ElementHandle<Element>[],
    studioId: number,
    date: Date
): Promise<(ScrapedLessonRaw | null)[][]> {
    const promises = lessonsRows.map(async (lessonRow) => {
        await lessonRow.waitForSelector(htmlSelectors.lessonFromScope);
        const lessonsElements = await lessonRow.$$(
            htmlSelectors.lessonFromScope
        );
        return await Promise.all(
            lessonsElements.map(async (singleLesson, index) => {
                const timeEl = await singleLesson
                    .$eval(htmlSelectors.lessonTime, (element) =>
                        element.textContent?.trim()
                    )
                    .catch(() => undefined);
                if (!timeEl) return null;
                const time = fromJPHourToDate(timeEl, date, index);

                const perf = await singleLesson.$eval(
                    htmlSelectors.lessonPerf,
                    (element) => element.textContent?.trim()
                );
                const prog = await singleLesson.$eval(
                    htmlSelectors.lessonProg,
                    (element) => element.textContent?.trim()
                );
                const diff = await singleLesson.$eval(
                    htmlSelectors.lessonDiff,
                    (element) => element.textContent?.trim()
                );
                return {
                    time,
                    perf,
                    prog,
                    diff,
                    studio: Studios[studioId],
                };
            })
        );
    });
    return Promise.all(promises);
}

/**
 * Goes through each individual lesson in the lesson grid of the weekly
 * lessons page and appends the lesson ID to each lesson in the lesson grid
 *
 * NOTE: Page should be in weekly lesson page for the studio for it to work
 */
async function addIDLessonTo(
    lessonsGrid: (ScrapedLessonRaw | null)[][],
    page: Page
) {
    // Go through each lesson in the lesson grid
    for (let row = 0; row < lessonsGrid.length; row++) {
        await page.waitForSelector(htmlSelectors.lessonsRows);

        for (let col = 0; col < lessonsGrid[row].length; col++) {
            // Check if there is a lesson and if there is, click the clickable content and extract the
            // lesson id from the new page URL. This is necessary because they don't use anchor elements for each lesson.
            const currLesson = lessonsGrid[row][col];
            if (!currLesson) continue;

            await page.waitForSelector(`${htmlSelectors.lessonsRows} > div`);

            await Promise.all([
                page.waitForNavigation({ waitUntil: "domcontentloaded" }),
                page.evaluate(
                    (row, col, selectors) => {
                        const newLessons = document
                            .querySelectorAll(selectors.lessonsRows)
                            [row].querySelectorAll(
                                selectors.lessonFromScope
                            ) as NodeListOf<HTMLElement>;

                        const lesson = newLessons[col].querySelector(
                            selectors.lesson
                        ) as HTMLElement;

                        lesson.click();
                    },
                    row,
                    col,
                    htmlSelectors
                ),
            ]);

            const indexOfId = page.url().lastIndexOf("/") + 1;

            const bmonsterId = page.url().substring(indexOfId, indexOfId + 8);
            currLesson.bmonsterId = bmonsterId;

            await Promise.all([
                page.waitForNavigation({ waitUntil: "domcontentloaded" }),
                page.goBack(),
            ]);
        }
    }
}

export default scrapeLessonsByDate;
