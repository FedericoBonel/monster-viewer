import { Request, Response } from "express";

/** Controller that handles HTTP requests related with lessons */
interface LessonsController {
    /** Gets a list of lessons */
    getList(req: Request, res: Response): Promise<void>;
}

export default LessonsController;
