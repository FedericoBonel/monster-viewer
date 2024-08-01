import { HTMLSelectors } from "./types";

const htmlSelectors: HTMLSelectors = {
    lessonsByStudio: {
        lessons: {
            rows: ".lessons",
            time: ".contents .fs_2.mb_text",
            performer: ".contents .mb_1.fs_2",
            program: ".contents .program-schedule-box .schedule-label",
            difficulty:
                ".contents .program-schedule-box .tags.flex.column.center",
        },
    },
};

export default htmlSelectors;
