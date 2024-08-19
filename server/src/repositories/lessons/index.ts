import Lesson from "../../models/lessons/Lesson";
import { BMonsterStudios } from "../../utils/constants/types";
import LessonsRepository, {
    AggregateSchedule,
    LessonsByDateGroupedByStudioRes,
} from "./types";

const lessonsRepository: LessonsRepository = {
    getLessonsByTimeGroupByStudio: async (
        date: Date
    ): Promise<LessonsByDateGroupedByStudioRes> => {
        // Get the date and time of a day in the future as max date
        const maxDate = new Date(date);
        maxDate.setUTCHours(
            date.getUTCHours() + 23,
            date.getUTCMinutes() + 59,
            date.getUTCSeconds() + 59,
            date.getUTCMilliseconds() + 999
        );

        // Group the lessons by studio in the given date
        const result = await Lesson.aggregate<AggregateSchedule>()
            .match({
                time: { $gte: date, $lte: maxDate },
            })
            .sort("time")
            .group({
                _id: {
                    studio: "$studio.name",
                },
                lessons: {
                    $push: "$$ROOT",
                },
            })
            .exec();

        // Return every lesson by studio name
        const lessonsByStudio: LessonsByDateGroupedByStudioRes = {};
        Object.keys(BMonsterStudios)
            .filter((value) => isNaN(Number(value)))
            .forEach((studioName) => (lessonsByStudio[studioName] = []));

        result.forEach((lesson) => {
            lessonsByStudio[lesson._id.studio] = lesson.lessons;
        });

        return lessonsByStudio;
    },
};

export default lessonsRepository;
