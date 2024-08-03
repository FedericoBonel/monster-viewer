import { APIs } from "./types";

const bmonsterBaseURL: string = "https://b-monster.hacomono.jp";

const apis: APIs = {
    bmonster: {
        lessons: {
            get(studio) {
                return `${bmonsterBaseURL}/reserve/schedule/${studio}/${studio}`;
            },
        },
    },
};

export default apis;
