/** Structure of how a lesson should be exposed to the web in a list */
export default class LessonListOutput {
    constructor(
        /** The studio where the lesson is happeing */
        public readonly studio: string,
        /** The performer of the lesson */
        public readonly performer: string,
        /** The program of the lesson */
        public readonly program: string,
        /** The difficulty of the lesson */
        public readonly difficulty: string,
        /** The time of beggning of program as a ISO string */
        public readonly time: string
    ) {}
}
