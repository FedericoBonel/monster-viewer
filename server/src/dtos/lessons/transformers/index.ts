import LessonListOutput from "../LessonListOutput";
import LessonsTransformers from "./types";
import Lesson from "../../../models/lessons/types";

const lessonsTransfomers: LessonsTransformers = {
    toLessonListOutput: function (storedLesson: Lesson): LessonListOutput {
        return new LessonListOutput(
            storedLesson.bmonsterId,
            storedLesson.studio,
            storedLesson.performer,
            storedLesson.program,
            storedLesson.difficulty,
            storedLesson.time.toISOString()
        );
    },
};

export default lessonsTransfomers;
