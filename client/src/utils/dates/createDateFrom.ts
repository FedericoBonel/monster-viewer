import { Dayjs } from "dayjs";
import dayjs from "@/lib/dayjs/instance";
import validation from "../constants/validation";

/**
 * Creates a date from a string, if the string is not a valid date it
 * returns a the date for today according to local time.
 *
 * @param date The date string from which to create the date object
 */
const createDateFrom = (date: string | undefined | null): Dayjs => {
    const givenDate = dayjs(date, validation.dates.dateFormat, true);
    if (!givenDate.isValid()) {
        // Not valid instance, return today
        return dayjs();
    }
    // Valid instance, return the new date object
    return givenDate;
};

export default createDateFrom;
