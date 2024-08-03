/**
 * Abstraction of an API Error,
 * defines what an API error should be like server wide.
 */
class APIError extends Error {
    /**
     * Expects an HTTP error status and a message to be returned to user
     * @param httpStatus HTTP Error status
     * @param message Message to be returned to user
     */
    constructor(
        public readonly httpStatus: number,
        public readonly message: string
    ) {
        super(message);
    }
}

export default APIError;
