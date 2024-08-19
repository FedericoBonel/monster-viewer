/** HTML Selectors constants */
export default interface HTMLSelectors {
    /** Selector for lesson row (Lessons in a scheduled time) */
    lessonsRows: string;
    /** Selector to select lessons from a lesson row. (Including non lessons, i.e. skipped schedules) */
    lessonFromScope: string;
    /** Selector to select lessons that are clickable. */
    lesson: string;
    /** Selector to select a lesson scheduled time */
    lessonTime: string;
    /** Selector to select a lesson performer */
    lessonPerf: string;
    /** Selector to select a lesson program */
    lessonProg: string;
    /** Selector to select a lesson difficulty */
    lessonDiff: string;
    /** Selector to select login form launch button */
    loginLaunch: string;
    /** Selector to select login form */
    loginForm: string;
}