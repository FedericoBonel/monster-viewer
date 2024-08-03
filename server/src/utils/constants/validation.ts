import { ValidationValues } from "./types";

const validation: ValidationValues = {
    lessons: {
        dateFrom: {
            daysBefore: 60,
            daysAfter: 14,
        },
    },
    pagination: {
        page: {
            min: 1,
            max: 500,
        },
        limit: {
            min: 1,
            max: 500,
        },
    },
};

export default validation;
