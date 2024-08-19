import { Entity } from "../utils/types";

/** Abstraction of a studio */
export default interface Studio extends Entity {
    /** Name of the Studio */
    name: string;
}
