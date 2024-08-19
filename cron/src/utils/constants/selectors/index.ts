import HTMLSelectors from "./types";

const htmlSelectors: HTMLSelectors = {
    lessonsRows: ".lessons",
    lessonFromScope: ":scope > div",
    lesson: ".d_lesson",
    lessonTime: ".fs_2",
    lessonPerf: ".mb_1",
    lessonProg: ".schedule-label",
    lessonDiff: ".tag-list",
    loginLaunch: ".login-button",
    loginForm: "div.inputs"
};

export default htmlSelectors;
