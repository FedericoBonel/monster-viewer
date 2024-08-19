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
    /** Urls for managing lessons */
    lessons: {
        /**
         * Returns the url to get all lessons by studio code for a week from the given date
         * @param studio The studio code to get
         * @param date The date from which get all lessons
         */
        get(studio: BMonsterStudios, date: Date): string;
    };
}

/** Third party APIs urls and paths */
export interface APIs {
    /** BMonster urls from which to scrape data */
    bmonster: BMonsterURLs;
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

/** Resources constants */
export interface Resources {
    /** Paths to exposed resources */
    paths: {
        /** Path to lessons resource */
        lessons: string;
        /** Path to daily schedule of lessons in all studios */
        dailySchedule: string;
    };
}

/** Validation values constants for inputs */
export interface ValidationValues {
    /** Values related with lessons */
    lessons: {
        /** Values related with date from which to search lessons validation */
        dateFrom: {
            /** Number of days from now from which is valid to search */
            daysBefore: number;
            /** Number of days from now from which is valid to search */
            daysAfter: number;
        };
    };
    /** Values related with pagination in queries */
    pagination: {
        /** Values related with validation of page number */
        page: {
            /** Minimum page number */
            min: number;
            /** Maximum page number */
            max: number;
        };
        /** Values related with validation of limit number */
        limit: {
            /** Minimum limit number */
            min: number;
            /** Maximum limit number */
            max: number;
        };
    };
}

/** Contants of server application */
interface Constants {
    /** Third party APIs urls and paths */
    apis: APIs;
    /** Mapping to HTML query selectors of BMonster page */
    htmlTagMapping: HTMLSelectors;
    /** REST API resources constants */
    resources: Resources;
    /** Validation values constants for inputs */
    validation: ValidationValues;
}

export default Constants;
