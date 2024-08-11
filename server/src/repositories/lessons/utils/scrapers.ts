import axios, { AxiosResponse } from "axios";
import { JSDOM } from "jsdom";
import Lesson from "../../../models/lessons/types";
import constants from "../../../utils/constants";
import { BMonsterStudios } from "../../../utils/constants/types";

/**
 * Helper function that scrapes the lessons for a date and a studio
 * @param studioId The Id of the studio to scrape
 * @param date The date from which to get the lessons
 */
export const scrapeLessonsByStudio = async (
    studioId: BMonsterStudios,
    date: Date
): Promise<Array<Lesson>> => {
    // Get the HTML public page
    const htmlpage: AxiosResponse<string> = await axios.get<string>(
        constants.apis.bmonster.lessons.get(studioId, date),
        { headers: { "Content-Type": "text/html" } }
    );

    const virtualDom: JSDOM = new JSDOM(htmlpage.data);

    // Array of rows for a time range
    const lessonsTimeRangeRows: NodeList =
        virtualDom.window.document.querySelectorAll(
            constants.htmlTagMapping.lessonsByStudio.lessons.rows
        );
    const lessons: Array<Lesson> = [];

    // Go through each row of lessons by time range for the week
    lessonsTimeRangeRows.forEach((lessonRow) => {
        // Get the lesson for today in that time range
        const todayLesson = lessonRow.childNodes.item(0);

        // Get the current lesson as an HTML element
        const currLesson: HTMLElement = todayLesson as HTMLElement;

        // Extract date and time, if none exists, then the element is empty, no lesson on that range for today
        const timeString: string | undefined | null = currLesson
            .querySelector(
                constants.htmlTagMapping.lessonsByStudio.lessons.time
            )
            ?.textContent?.trim();
        if (!timeString) return;

        // Check if the hour has 1 or 2 digits and extract it and the minutes
        const isBefore10: boolean = timeString.charAt(1) === ":";
        const hours: number = Number(
            timeString.substring(0, isBefore10 ? 1 : 2)
        );
        const minutes: number = Number(
            timeString.substring(isBefore10 ? 2 : 3, isBefore10 ? 4 : 5)
        );

        const time: Date = new Date();
        // Set the UTC hours for the date, since the dates are JP based you can just substract 9 hours
        time.setUTCHours(hours - 9, minutes, 0, 0);

        const performer: string | undefined | null = currLesson
            .querySelector(
                constants.htmlTagMapping.lessonsByStudio.lessons.performer
            )
            ?.textContent?.trim();
        const program: string | undefined | null = currLesson
            .querySelector(
                constants.htmlTagMapping.lessonsByStudio.lessons.program
            )
            ?.textContent?.trim();
        const dificulty: string | undefined | null = currLesson
            .querySelector(
                constants.htmlTagMapping.lessonsByStudio.lessons.difficulty
            )
            ?.textContent?.trim();

        if (time && performer && program && dificulty)
            lessons.push({
                _id: "DBID",
                time,
                performer: { _id: "DBID", name: performer },
                program: { _id: "DBID", name: program },
                difficulty: { _id: "DBID", name: dificulty },
                studio: { _id: "DBID", name: BMonsterStudios[studioId] },
                bmonsterId: "BMONSTERID"
            });
    });

    return lessons;
};