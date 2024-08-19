import Lesson from "../../models/lessons/Lesson.js";
import LessonInterface from "../../models/lessons/types.js";
import LessonsRepositories from "./types.js";

const lessonsRepositories: LessonsRepositories = {
    upsertMany: async (lessons: Iterable<LessonInterface>): Promise<void> => {
        await Lesson.bulkWrite(
            Array.from(lessons).map((lesson) => ({
                updateOne: {
                    filter: {
                        "studio.name": lesson.studio.name,
                        time: lesson.time,
                    },
                    update: { $set: lesson },
                    upsert: true,
                },
            })),
            { skipValidation: false }
        );
    },
};

export default lessonsRepositories;
