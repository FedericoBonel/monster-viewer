import { Types } from "mongoose";

/** Abstraction of a basic DB entity */
export interface Entity {
    /** Database id */
    readonly _id?: Types.ObjectId;
}
