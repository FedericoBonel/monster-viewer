import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import LessonsController, { DailyScheduleListQueries } from "./types";
import createSuccessPayload from "../../utils/payloads/SuccessPayload";

const getDailyScheduleList: RequestHandler<
    unknown,
    unknown,
    unknown,
    DailyScheduleListQueries
> = async (req, res) => {
    const { date } = req.query;
    res.status(StatusCodes.OK).json(createSuccessPayload(date));
};

const lessonsController: LessonsController = {
    getDailyScheduleList,
};

export default lessonsController;
