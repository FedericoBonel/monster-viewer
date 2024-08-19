/** Creates a date from a base date and a JP time string. It adds days to the base date if necessary */
const fromJPHourToDate = (
    timeStr: string,
    baseDate: Date,
    daysToAdd: number = 0
): Date => {
    // Check if the time is after 10 or not
    const isBefore10: boolean = timeStr.charAt(1) === ":";
    const hour: number = Number(timeStr.substring(0, isBefore10 ? 1 : 2));
    const minute: number = Number(
        timeStr.substring(isBefore10 ? 2 : 3, isBefore10 ? 4 : 5)
    );
    // Create the date and make it UTC
    const date = new Date(baseDate);
    date.setUTCDate(date.getUTCDate() + daysToAdd);
    date.setUTCHours(hour - 9, minute, 0, 0);
    return date;
};

export default fromJPHourToDate;
