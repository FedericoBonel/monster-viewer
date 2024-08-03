import { RequestHandler } from "express";
import { validationResult, Result, ValidationError } from "express-validator";
import BadRequestError from "../../../utils/errors/BadRequestError";
import messages from "../../../utils/messages";

/**
 * Verifies the validation executed by express-validator, if any error is detected a BadRequestError is thrown.
 */
const checkValidation: RequestHandler = async (req, res, next) => {
    const errorsFound: Result<ValidationError> = validationResult(req);

    if (!errorsFound.isEmpty()) {
        throw new BadRequestError(
            messages.validation.general,
            errorsFound.array().map((err) => {
                // If the type is field, it means that one of the fields is invalid
                // Else it could be because of alternatives, or most likely, an unkown field was provided
                if (err.type === "field") {
                    return {
                        msg: err.msg,
                        errorField: err.path,
                        location: err.location,
                    };
                } else {
                    return {
                        msg: err.msg,
                    };
                }
            })
        );
    }

    next();
};

export default checkValidation;
