import config from "@/config";
import Apis from "./types";

const apis: Apis = {
    bmonster: {
        getDailySchedule: (date: Date): string => {
            const formatter = Intl.DateTimeFormat("en-CA", {
                timeZone: "Japan",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
            const formattedDate = formatter.format(date);
            return `${config.apis.bmonster.baseUrl}/lessons/dailyschedule?date=${formattedDate}`;
        },
    },
};

export default apis;
