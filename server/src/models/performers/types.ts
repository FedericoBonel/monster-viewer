import { Entity } from "../utils/types"

/** Abstraction of a performer */
export default interface Performer extends Entity {
    /** Name of the Performer */
    name: string,
}