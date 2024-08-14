import { RequestHandler } from "express";
import { checkExact, checkSchema } from "express-validator";
import checkValidator from "../utils/checkValidation";
import messages from "../../../utils/messages";
import constants from "../../../utils/constants";

/** Validates query params for daily schedule listing endpoints */
const dailyScheduleListingValidator: Array<RequestHandler> = [
    checkExact(
        checkSchema(
            {
                date: {
                    isDate: {
                        options: {
                            strictMode: true,
                            format: "YYYY-MM-DD",
                            delimiters: ["-"],
                        },
                        errorMessage: messages.validation.lessons.date,
                        bail: true,
                    },
                    custom: {
                        options: (date: string): boolean => {
                            const dateFrom = new Date(date);
                            const minDate = new Date();
                            minDate.setUTCDate(
                                minDate.getUTCDate() -
                                    constants.validation.lessons.dateFrom
                                        .daysBefore
                            );
                            minDate.setUTCHours(0);
                            minDate.setUTCMinutes(0, 0, 0);
                            const maxDate = new Date();
                            maxDate.setUTCDate(
                                maxDate.getDate() +
                                    constants.validation.lessons.dateFrom
                                        .daysAfter
                            );
                            maxDate.setUTCHours(0);
                            maxDate.setUTCMinutes(0, 0, 0);
                            return (
                                minDate.getTime() < dateFrom.getTime() &&
                                dateFrom.getTime() < maxDate.getTime()
                            );
                        },
                        errorMessage: messages.validation.lessons.date,
                        bail: true,
                    },
                    // Transform to UTC from JP timezone
                    customSanitizer: {
                        options: (date): Date => {
                            const dateFrom = new Date(date);
                            // Convert to UTC from JP time
                            dateFrom.setUTCHours(
                                dateFrom.getUTCHours() - 9,
                                0,
                                0,
                                0
                            );
                            return dateFrom;
                        },
                    },
                },
            },
            ["query"]
        )
    ),
    checkValidator,
];

export default dailyScheduleListingValidator;
