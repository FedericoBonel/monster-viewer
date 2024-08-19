import { Schema, Types } from "mongoose";
import { DenormalizedStudio } from "./types";

/** Schema of a denormalized studio */
const DenormStudio = new Schema<DenormalizedStudio>({
    _id: Types.ObjectId,
    name: { type: String, required: true },
});

export default DenormStudio;