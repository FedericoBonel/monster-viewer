import LessonListOutput from "../LessonListOutput";
import LessonsTransformers from "./types";
import Lesson from "../../../models/lessons/types";

const lessonsTransfomers: LessonsTransformers = {
    toLessonListOutput: function (storedLesson: Lesson): LessonListOutput {
        return new LessonListOutput(
            storedLesson.bmonsterId,
            {
                _id: storedLesson.studio._id.toString(),
                name: storedLesson.studio.name,
            },
            {
                _id: storedLesson.performer._id.toString(),
                name: storedLesson.performer.name,
            },
            {
                _id: storedLesson.program._id.toString(),
                name: storedLesson.program.name,
            },
            {
                _id: storedLesson.difficulty._id.toString(),
                name: storedLesson.difficulty.name,
            },
            storedLesson.time.toISOString()
        );
    },
};

export default lessonsTransfomers;
