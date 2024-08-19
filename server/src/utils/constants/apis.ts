import { URLSearchParams } from "url";
import { APIs } from "./types";

const bmonsterBaseURL: string = "https://b-monster.hacomono.jp";

const apis: APIs = {
    bmonster: {
        lessons: {
            get(studio, date) {
                const formatter = Intl.DateTimeFormat("en-CA", {
                    timeZone: "Japan",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });
                const formattedDate = new URLSearchParams(
                    formatter.format(date)
                ).toString();
                return `${bmonsterBaseURL}/reserve/schedule/${studio}/${studio}/?date_from=${formattedDate}`;
            },
        },
    },
};

export default apis;
