import { Router } from "express";
import lessonsController from "../controllers/lessons";
import { dailyScheduleListingValidator } from "../middlewares/validators/lessons";

const lessonsRouter: Router = Router();

lessonsRouter
    .route("")
    .get(dailyScheduleListingValidator, lessonsController.getDailyScheduleList);

export default lessonsRouter;
