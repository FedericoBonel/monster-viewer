import { DailyScheduleOutput, LessonListOutput } from "../../dtos/lessons";
import lessonsTransfomers from "../../dtos/lessons/transformers";
import Lesson from "../../models/lessons/types";
import lessonsRepository from "../../repositories/lessons";
import LessonsServices from "./types";

const lessonsServices: LessonsServices = {
    getDailyScheduleAllStudios: async (
        date: Date
    ): Promise<DailyScheduleOutput<LessonListOutput>> => {

        // Get the lessons for the date grouped by studio
        const storedLessons: { [key: string]: Array<Lesson> } =
            await lessonsRepository.getLessonsByTimeGroupByStudio(date);

        // Convert them as how they should be exposed to web
        const dailySchedule: DailyScheduleOutput<LessonListOutput> = {};
        Object.keys(storedLessons).forEach((studioName) => {
            dailySchedule[studioName] = storedLessons[studioName].map(
                (lesson) => lessonsTransfomers.toLessonListOutput(lesson)
            );
        });

        return dailySchedule;
    },
};

export default lessonsServices;
