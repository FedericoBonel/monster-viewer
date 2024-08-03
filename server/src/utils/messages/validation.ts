import { ValidationMessages } from "./types";

const validationMessages: ValidationMessages = {
    pagination: {
        page: "You can only provide positive integers as pages for lists",
        limit: "You can only provide positive integers as limits for lists",
    },
    lessons: {
        date: "You must provide a date in the format YYYY-MM-DD that is after two months in the past and before two weeks in the future",
    },
    general: "Some of the provided fields are invalid. Check the values you are providing and try again."
};

export default validationMessages;
