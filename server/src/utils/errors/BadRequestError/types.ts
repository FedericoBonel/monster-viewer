/** Abstraction of how a validation error should be attached to a BadRequest error constructor */
export interface ValidationError {
    /** Message to be returned explaining error */
    msg: string;
    /** Field that is invalid */
    errorField?: string;
    /** Location of the field that is invalid (i.g. "query", "body", etc.) */
    location?: string;
}
