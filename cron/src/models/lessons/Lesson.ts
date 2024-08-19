import { Schema, model } from "mongoose";
import Lesson from "./types.js";
import DenormStudio from "./DenormStudio.js";
import DenormProgram from "./DenormProgram.js";
import DenormDifficulty from "./DenormDifficulty.js";
import DenormPerformer from "./DenormPerformer.js";

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
    performer: {
        type: DenormPerformer,
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
