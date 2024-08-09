import { Dayjs } from "dayjs";

export default interface Validation {
    /** Date related validation values */
    dates: {
        /** Max selectable date */
        maxDate: Dayjs;
        /** Minimum selectable date */
        minDate: Dayjs;
        /** Date format for Day js */
        dateFormat: string;
        /** Date time format for Day js */
        timeFormat: string;
    };
}
