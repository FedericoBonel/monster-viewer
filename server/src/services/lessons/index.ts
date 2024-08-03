import { DailyScheduleOutput, LessonListOutput } from "../../dtos/lessons";
import lessonsTransfomers from "../../dtos/lessons/transformers";
//TODO: This should come from models layer
import { LessonEntity } from "../../dtos/lessons/transformers/types";
import LessonsServices from "./types";

const lessonsServices: LessonsServices = {
    getDailyScheduleAllStudios: async (
        date: Date
    ): Promise<DailyScheduleOutput<LessonListOutput>> => {

        // TODO: Actually implement this
        const storedLessons: { [key: string]: Array<LessonEntity> } = {
            EBISU: [
                {
                    performer: "ICHI",
                    difficulty: "Begginer",
                    studio: "EBISU",
                    program: "MIX-1",
                    time: new Date("2024-08-03T00:50:52.679Z"),
                },
            ],
        };

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
