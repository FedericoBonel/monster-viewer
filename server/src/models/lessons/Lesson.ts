import { Schema, model } from "mongoose";
import Lesson from "./types";
import DenormStudio from "./DenormStudio";
import DenormProgram from "./DenormProgram";
import DenormDifficulty from "./DenormDifficulty";

const MODEL_NAME = "Lesson";

/** Schema of a lesson */
const LessonsSchema = new Schema<Lesson>({
    bmonsterId: {
        type: String,
        minlength: 1,
        unique: true,
    },
    studio: {
        type: DenormStudio,
        required: true,
    },
    program: {
        type: DenormProgram,
        required: true,
    },
    difficulty: {
        type: DenormDifficulty,
        required: true,
    },
    time: {
        type: Date,
        required: true,
        expires: 5184000, // Expires the document after two months
    },
});

LessonsSchema.index({ time: 1, "studio.name": 1 }, { unique: true });

export default model(MODEL_NAME, LessonsSchema);
