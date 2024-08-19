import { Entity } from "../utils/types.js";

export default interface Performer extends Entity {
    /** Name of the performer */
    name: string;
}