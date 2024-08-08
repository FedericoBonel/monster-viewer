/**
 * Adds the specific number of days to the given date and returns it (The number of days can be negative)
 * @param date The date to which add the number of days
 * @param daysToAdd The number of days to add to the date
 * @returns The new date after adding the number of days
 */
const addDays = (date: Date, daysToAdd: number): Date => {
    const newDateTime = date.getTime() + daysToAdd * 24 * 60 * 60 * 1000;
    return new Date(newDateTime);
};

export default addDays;
