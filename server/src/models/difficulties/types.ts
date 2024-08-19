import { Entity } from "../utils/types"

/** Abstraction of a lesson difficulty */
export default interface Difficulty extends Entity {
    /** Name of the difficulty */
    name: string,
}