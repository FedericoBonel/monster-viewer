import { Router } from "express";
import lessonsController from "../controllers/lessons";

const lessonsRouter: Router = Router();

lessonsRouter.route("").get(lessonsController.getList);

export default lessonsRouter;
