import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Suspense from "@/routers/components/Suspense";
const ErrorPage = lazy(() => import("@/pages/errors/ErrorPage"));

/** This configuration object takes care of routing to all error pages. */
const ErrorRouter: RouteObject = {
    path: ":code?",
    element: (
        <Suspense>
            <ErrorPage />
        </Suspense>
    ),
};

export default ErrorRouter;
