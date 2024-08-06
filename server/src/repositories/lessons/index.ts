import Lesson from "../../models/lessons/types";
import LessonsRepository, { LessonsByDateGroupedByStudioRes } from "./types";
import { BMonsterStudios } from "../../utils/constants/types";
import { scrapeLessonsByStudio } from "./utils/scrapers";

const lessonsRepository: LessonsRepository = {
    getLessonsByTimeGroupByStudio: async (
        date: Date
    ): Promise<LessonsByDateGroupedByStudioRes> => {
        // Get the studio names and avoid getting the autogenerated numerical indexes
        const studioNames = Object.keys(BMonsterStudios).filter((name) =>
            isNaN(Number(name))
        );

        // Generate the promises for all studios scraping and await them
        const lessonsByStudio: LessonsByDateGroupedByStudioRes = {};
        await Promise.allSettled(
            studioNames.map(async (studioName: string) => {
                const lessons: Array<Lesson> = await scrapeLessonsByStudio(
                    // Map the studio name as one of the names of BMonster enum
                    BMonsterStudios[studioName as keyof typeof BMonsterStudios],
                    date
                );
                lessonsByStudio[studioName] = lessons;
            })
        );

        return lessonsByStudio;
    },
};

export default lessonsRepository;
