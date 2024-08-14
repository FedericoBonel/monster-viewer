/** The structure of a successful response from the API */
interface SuccessfulResponse<T> {
    /** The flag indicating a succesful response */
    success: true;
    /** The data being received */
    data: T;
}

export default SuccessfulResponse;
