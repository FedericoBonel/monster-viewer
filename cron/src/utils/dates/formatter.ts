/** 
 * Formats a date to a date locale and timezone. 
 * 
 * @example
 * // Today
 * const date = new Date();
 * // The order is: the date you want to output as a date string, the timezone you want to output it as, and the locale for the final format (en-CA) outputs it as YYYY-MM-DD
 * const formattedDate = formatToDateTimeZone(date, "Japan", "en-CA");
 */
const formatToDateTimeZone = (
    date: Date,
    timeZone: string = "Japan",
    locale: string = "en-CA"
) => {
    const formatter = Intl.DateTimeFormat(locale, {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return formatter.format(date);
};

export default formatToDateTimeZone;
