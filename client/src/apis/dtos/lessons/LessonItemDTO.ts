/** Structure of how a lesson is received from API in a list */
interface LessonItemDTO {
    /** The lesson id */
    readonly _id: string;
    /** The studio where the lesson is happening */
    readonly studio: {
        _id: string;
        name: string;
    };
    /** The performer of the lesson */
    readonly performer: {
        _id: string;
        name: string;
    };
    /** The program of the lesson */
    readonly program: {
        _id: string;
        name: string;
    };
    /** The difficulty of the lesson */
    readonly difficulty: {
        _id: string;
        name: string;
    };
    /** The time of beggning of program as a ISO string */
    readonly time: string;
}

export default LessonItemDTO;
