import Constants from "./types";

const constants: Constants = {
    apis: {
        bmonster: {
            lessons: {
                get(studio) {
                    return `https://b-monster.hacomono.jp/reserve/schedule/${studio}/${studio}`;
                },
            },
        },
    },
    htmlTagMapping: {
        lessons: { rowsSelector: ".lessons" },
    },
};

export default constants;
