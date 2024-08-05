import LessonListOutput from "../LessonListOutput";
import LessonsTransformers from "./types";
import Lesson from "../../../models/lessons/types";

const lessonsTransfomers: LessonsTransformers = {
    toLessonListOutput: function (storedLesson: Lesson): LessonListOutput {
        return new LessonListOutput(
            storedLesson.studio.name,
            storedLesson.performer.name,
            storedLesson.program.name,
            storedLesson.difficulty.name,
            storedLesson.time.toISOString()
        );
    },
};

export default lessonsTransfomers;
