import { Schema, model } from "mongoose";
import Program from "./types.js";

const MODEL_NAME = "Program"

const ProgramSchema = new Schema<Program>({
    name: { type: String, minlength: 1, unique: true },
});

export default model(MODEL_NAME, ProgramSchema);
