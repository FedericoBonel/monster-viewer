import LessonListOutput from "../LessonListOutput";
import LessonsTransformers, { LessonEntity } from "./types";

const lessonsTransfomers: LessonsTransformers = {
    toLessonListOutput: function (
        storedLesson: LessonEntity
    ): LessonListOutput {
        return new LessonListOutput(
            storedLesson.studio,
            storedLesson.performer,
            storedLesson.program,
            storedLesson.difficulty,
            storedLesson.time.toISOString()
        );
    },
};

export default lessonsTransfomers;
