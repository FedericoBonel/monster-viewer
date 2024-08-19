import { Entity } from "../utils/types.js";

export default interface Program extends Entity {
    /** Name of the program */
    name: string;
}