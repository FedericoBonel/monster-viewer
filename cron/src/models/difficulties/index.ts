import { Schema, model } from "mongoose";
import Difficulty from "./types.js";

const MODEL_NAME = "Difficulty";

const DifficultySchema = new Schema<Difficulty>({
    name: { type: String, minlength: 1, unique: true },
});

export default model(MODEL_NAME, DifficultySchema);
