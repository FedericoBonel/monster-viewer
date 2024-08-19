import { Entity } from "../utils/types.js";

export default interface Difficulty extends Entity {
    /** Name of the difficulty */
    name: string;
}