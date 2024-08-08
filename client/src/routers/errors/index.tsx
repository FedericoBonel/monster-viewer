import { RouteObject } from "react-router-dom";

/** This configuration object takes care of routing to all error pages. */
const ErrorRouter: RouteObject = {
    path: ":code?",
    element: <p>An error happened</p>,
};

export default ErrorRouter;
