import { Entity } from "../utils/types"

/** Abstraction of a lesson program */
export default interface Program extends Entity {
    /** Name of the Program */
    name: string,
}