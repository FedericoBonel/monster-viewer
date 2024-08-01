import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import LessonsController from "./types";

const getList = async (req: Request, res: Response): Promise<void> => {
    res.status(StatusCodes.OK).json({ data: "lessons" });
};

const lessonsController: LessonsController = {
    getList,
};

export default lessonsController;
