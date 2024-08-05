import Lesson from "../../models/lessons/types";
import LessonsRepository from "./types";

const lessonsRepository: LessonsRepository = {
    getLessonsByTimeGroupByStudio: async (date: Date): Promise<{[studioName: string]: Array<Lesson>}> => {
        return {
            EBISU: [
                {
                    _id: "123414",
                    performer: { _id: "1", name: "ICHI" },
                    difficulty: { _id: "2", name: "Begginer" },
                    studio: { _id: "3", name: "EBISU" },
                    program: { _id: "4", name: "MIX-1" },
                    time: new Date("2024-08-03T00:50:52.679Z"),
                },
            ],
        };
    },
};

export default lessonsRepository;
