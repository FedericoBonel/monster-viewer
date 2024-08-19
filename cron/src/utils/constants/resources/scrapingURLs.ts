import formatToDateTimeZone from "@/utils/dates/formatter";
import ScrapingURLs from "./types";

const scrapingURLs: ScrapingURLs = {
    getWeeklyLessonsByStudio: (date: Date, studioId: number): string => {
        const formattedDate = formatToDateTimeZone(date);
        return `https://b-monster.hacomono.jp/reserve/schedule/${studioId}/${studioId}?date_from=${formattedDate}`;
    },
};

export default scrapingURLs;