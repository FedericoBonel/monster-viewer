import htmlSelectors from "./htmlSelectors";
import Constants from "./types";

const constants: Readonly<Constants> = {
    apis: {
        bmonster: {
            lessons: {
                get(studio) {
                    return `https://b-monster.hacomono.jp/reserve/schedule/${studio}/${studio}`;
                },
            },
        },
    },
    htmlTagMapping: htmlSelectors,
    resources: {
        paths: {
            lessons: "/lessons",
        },
    },
};

export default constants;
