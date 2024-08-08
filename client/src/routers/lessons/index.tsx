import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Suspense from "@/routers/components/Suspense";
const DailySchedulePage = lazy(
    () => import("@/pages/lessons/DailySchedulePage")
);

/** This configuration object takes care of routing to all lessons pages. */
const LessonsRouter: RouteObject = {
    index: true,
    element: (
        <Suspense>
            <DailySchedulePage />
        </Suspense>
    ),
};

export default LessonsRouter;
