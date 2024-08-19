import validation from "@/utils/constants/validation";

/** Verifies if a difficulty from a lesson refers to an event or not */
const isEvent = (difficulty: string): boolean =>
    difficulty === validation.events.event ||
    difficulty === validation.events.unkown;

export default isEvent;
