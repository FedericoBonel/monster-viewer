import { Schema, Types } from "mongoose";
import { DenormalizedProgram } from "./types";

/** Schema of a denormalized program */
const DenormProgram = new Schema<DenormalizedProgram>({
    _id: Types.ObjectId,
    name: { type: String, required: true },
});

export default DenormProgram;