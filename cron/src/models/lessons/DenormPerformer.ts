import { Schema, Types } from "mongoose";
import { DenormalizedPerformer } from "./types.js";

/** Schema of a denormalized performer */
const DenormPerformer = new Schema<DenormalizedPerformer>({
    _id: Types.ObjectId,
    name: { type: String, required: true },
});

export default DenormPerformer;