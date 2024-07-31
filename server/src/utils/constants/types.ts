interface BMonsterURLs {
    lessons: {
        /**
         * Url to get all studios by code
         * @param studio The studio code to get
         */
        get(studio: string): string;
    };
}

interface Constants {
    /** Third party APIs urls and paths */
    apis: {
        bmonster: BMonsterURLs;
    };
    /** Mapping to HTML query selectors of BMonster page */
    htmlTagMapping: {
        /** Selectors for lessons */
        lessons: {
            /** Selector for getting a row of lessons (Lessons in a specific hour) */
            rowsSelector: string;
        };
    };
}

export default Constants;
