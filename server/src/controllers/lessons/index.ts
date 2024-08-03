import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import LessonsController, { DailyScheduleListQueries } from "./types";
import createSuccessPayload from "../../utils/payloads/SuccessPayload";
import lessonsServices from "../../services/lessons";

const getDailyScheduleList: RequestHandler<
    unknown,
    unknown,
    unknown,
    DailyScheduleListQueries
> = async (req, res) => {
    const { date } = req.query;

    const result = await lessonsServices.getDailyScheduleAllStudios(date);
    
    res.status(StatusCodes.OK).json(createSuccessPayload(result));
};

const lessonsController: LessonsController = {
    getDailyScheduleList,
};

export default lessonsController;
