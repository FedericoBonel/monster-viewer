import { Schema, Types } from "mongoose";
import { DenormalizedDifficulty } from "./types.js";

/** Schema of a denormalized difficulty */
const DenormDifficulty = new Schema<DenormalizedDifficulty>({
    _id: Types.ObjectId,
    name: { type: String, required: true },
});

export default DenormDifficulty;