import { Schema, model } from "mongoose";
import Performer from "./types.js";

const MODEL_NAME = "Performer";

const PerformerSchema = new Schema<Performer>({
    name: { type: String, minlength: 1, unique: true },
});

export default model(MODEL_NAME, PerformerSchema);
