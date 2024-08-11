/** Superclass that should be extended by any identifiable resource  */
export default class Entity {
    /** Constructs a new entity with an Id */
    constructor(
        /** Id of the entity */
        public readonly _id: string
    ) {}
}
