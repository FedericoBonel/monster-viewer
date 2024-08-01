/** Enum of the studios names and their corresponding IDs */
export enum BMonsterStudios {
    GINZA = 1,
    OMOTESANDO,
    EBISU,
    SHINJUKU,
    IKEBUKURO,
    UMEDA,
    NAGOYA,
}

/** The urls for getting data from bmonster */
interface BMonsterURLs {
    lessons: {
        /**
         * Returns the url to get all studios by code
         * @param studio The studio code to get
         */
        get(studio: BMonsterStudios): string;
    };
}

/** The HTML Selectors for scrapping data */
export interface HTMLSelectors {
    /** HTML Query selectors for lessons by studio */
    lessonsByStudio: {
        /** Selectors for lessons */
        lessons: {
            /** Selector for getting a row of lessons (Lessons in a specific hour) */
            rows: string;
            /** Selector for getting the time of a lesson */
            time: string;
            /** Selector for getting the performer of a lesson */
            performer: string;
            /** Selector for getting the program of a lesson */
            program: string;
            /** Selector for getting the difficulty of a lesson */
            difficulty: string;
        };
    };
}

/** Contants of server application */
interface Constants {
    /** Third party APIs urls and paths */
    apis: {
        bmonster: BMonsterURLs;
    };
    /** Mapping to HTML query selectors of BMonster page */
    htmlTagMapping: HTMLSelectors;
    /** REST API resources constants */
    resources: {
        /** Paths to exposed resources */
        paths: {
            /** Path to lessons resource */
            lessons: string;
        };
    };
}

export default Constants;
