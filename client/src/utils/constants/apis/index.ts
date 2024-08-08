import Apis from "./types";
import config from "@/config";

const apis: Apis = {
    bmonster: {
        getDailySchedule: (date: Date): string => {
            const formatter = Intl.DateTimeFormat("en-CA", {
                timeZone: "Japan",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
            const formattedDate = new URLSearchParams(
                formatter.format(date)
            ).toString();
            return `${config.apis.bmonster.baseUrl}/lessons/dailyschedule?date=${formattedDate}`;
        },
    },
};

export default apis;
