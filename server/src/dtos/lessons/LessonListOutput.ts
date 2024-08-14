import Entity from "../utils/Entity";

/** Structure of denormalized studio */
interface Studio {
    _id: string;
    name: string;
}

/** Structure of denormalized performer */
interface Performer {
    _id: string;
    name: string;
}

/** Structure of denormalized program */
interface Program {
    _id: string;
    name: string;
}

/** Structure of denormalized difficulty */
interface Difficulty {
    _id: string;
    name: string;
}

/** Structure of how a lesson should be exposed to the web in a list */
export default class LessonListOutput extends Entity {
    constructor(
        /** BMonster id of the lesson */
        public readonly _id: string,
        /** The studio where the lesson is happeing */
        public readonly studio: Studio,
        /** The performer of the lesson */
        public readonly performer: Performer,
        /** The program of the lesson */
        public readonly program: Program,
        /** The difficulty of the lesson */
        public readonly difficulty: Difficulty,
        /** The time of beggning of program as a ISO string */
        public readonly time: string
    ) {
        super(_id);
    }
}
