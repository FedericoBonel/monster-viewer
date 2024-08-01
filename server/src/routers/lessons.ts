import { Router } from "express";

const lessonsRouter: Router = Router();

// TODO: Add controller
lessonsRouter.route("/").get(async (req, res): Promise<void> => {
    res.json({ data: "Lesson List" });
});

export default lessonsRouter;
