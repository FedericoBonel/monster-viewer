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
        /** Date and day of the week format for field picker */
        fieldPickerFormat: string;
    };
    /** Events related validation strings */
    events: {
        /** The difficulty of a basic event */
        event: string;
        /** Unkown difficulty */
        unkown: string;
    };
    /** API/backend related validation values */
    api: {
        /** The number of minutes a window lasts for rate limiting in backend. */
        nMinutesWindow: number;
    };
}
