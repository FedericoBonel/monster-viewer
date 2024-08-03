import { RequestHandler } from "express";

/** Abstraction of daily schedule list queries */
export interface DailyScheduleListQueries {
    /** Date from which get daily schedule */
    date: Date;
}

/** Controller that handles HTTP requests related with lessons */
interface LessonsController {
    /** Gets a list of lessons */
    getDailyScheduleList: RequestHandler<unknown, unknown, unknown, DailyScheduleListQueries>;
}

export default LessonsController;
