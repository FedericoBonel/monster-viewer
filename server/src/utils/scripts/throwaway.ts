import axios, { AxiosResponse } from "axios";
import { JSDOM } from "jsdom";
import constants from "../constants";

/** Throw away script to demonstrate parse of public lessons page for a studio */
const demo = async (): Promise<void> => {
    const htmlpage: AxiosResponse<string> = await axios.get<string>(
        constants.apis.bmonster.lessons.get("3"),
        { headers: { "Content-Type": "text/html" } }
    );

    const virtualDom: JSDOM = new JSDOM(htmlpage.data);

    // Array of rows
    const lessons: NodeList =
        virtualDom.window.document.querySelectorAll(".lessons");

    const lessonObjects: Array<{
        time: Date;
        performer: string;
        dificulty: string;
        program: string;
    }> = [];

    // Go through each row of lessons
    lessons.forEach((lessonRow) =>
        // For each row extract data and add it to result
        lessonRow.childNodes.forEach((lesson: ChildNode, index: number) => {
            // Get the current lesson as an HTML element
            const currLesson: HTMLElement = lesson as HTMLElement;

            // Extract date and time, if none exists, then the element is empty, no lesson on that day
            const timeString: string | undefined | null = currLesson
                .querySelector(".contents .fs_2.mb_text")
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
            // Since the lessons are retured from the current day to a week forward
            // We can just add how many positions/days forward the current lesson is from current date 
            time.setUTCDate(time.getUTCDate() + index);
            time.setUTCHours(hours - 9, minutes, 0, 0);

            const performer: string | undefined | null = currLesson
                .querySelector(".contents .mb_1.fs_2 ")
                ?.textContent?.trim();
            const program: string | undefined | null = currLesson
                .querySelector(
                    ".contents .program-schedule-box .schedule-label"
                )
                ?.textContent?.trim();
            const dificulty: string | undefined | null = currLesson
                .querySelector(
                    ".contents .program-schedule-box .tags.flex.column.center"
                )
                ?.textContent?.trim();

            if (time && performer && program && dificulty)
                lessonObjects.push({ time, performer, program, dificulty });
        })
    );
    console.log(
        lessonObjects.map((lesson) => ({
            ...lesson,
            time: lesson.time.toLocaleString(),
        }))
    );
};

demo();
