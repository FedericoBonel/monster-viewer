/** Abstraction of a response payload */
export interface ApiResPayload<T> {
    /** True if the response is succesfull. False if an error happened */
    readonly success: boolean;
    /** Optional data attached to response */
    readonly data?: T;
}
