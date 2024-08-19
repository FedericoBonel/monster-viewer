import { Schema, model } from "mongoose";
import Studio from "./types.js";

const MODEL_NAME = "Studio"

const StudioSchema = new Schema<Studio>({
    name: { type: String, minlength: 1, unique: true },
});

export default model(MODEL_NAME, StudioSchema);
