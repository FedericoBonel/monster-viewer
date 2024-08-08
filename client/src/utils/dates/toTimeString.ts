/**
 * Extracts the date time (HH:mm) as a string and returns it in 24hr format.
 * @param date The date object to convert to a string
 */
const toTimeString = (date: Date): string => {
    return date.toLocaleTimeString("JP", {
        timeStyle: "short",
        hour12: false,
    });
};

export default toTimeString;
