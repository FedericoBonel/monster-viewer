import { BMonsterStudios } from "../../utils/constants/types";
import LessonsRepository, { LessonsByDateGroupedByStudioRes } from "./types";

const lessonsRepository: LessonsRepository = {
    getLessonsByTimeGroupByStudio: async (
        date: Date
    ): Promise<LessonsByDateGroupedByStudioRes> => {
        // TODO: Implement this from database
        return {
            [BMonsterStudios[1]]: [],
            [BMonsterStudios[2]]: [],
            [BMonsterStudios[3]]: [],
            [BMonsterStudios[4]]: [],
            [BMonsterStudios[5]]: [],
            [BMonsterStudios[6]]: [],
            [BMonsterStudios[7]]: [],
        };
    },
};

export default lessonsRepository;
