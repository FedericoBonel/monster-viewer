/**
 * Creates a date from a string, if the string is not a valid date it
 * returns a the date for today according to local time.
 *
 * NOTE: This does not validate the string it self (i.g: 2024/02/31 will return a date with the date of 2024/03/02)
 * but it will check that it can create an object with a valid date from it.
 *
 * @param date The date string from which to create the date object
 */
const createDateFrom = (date: string): Date => {
    const givenDate = new Date(date);
    if (isNaN(givenDate.getTime())) {
        // Not valid instance, return today
        return new Date();
    }
    // Valid instance, return the new date objecet
    return givenDate;
};

export default createDateFrom;
