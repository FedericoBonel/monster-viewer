import LessonsCaches from "./types";

const lessonsCaches: Readonly<LessonsCaches> = {
    all: ["lessons"],
    lists: (): string[] => [...lessonsCaches.all, "list"],
    dailySchedule: (selectedDate: string): string[] => [
        ...lessonsCaches.lists(),
        selectedDate,
    ],
};

export default lessonsCaches;
