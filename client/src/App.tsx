import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import LessonsRouter from "@/routers/lessons";
import ErrorRouter from "@/routers/errors";
import ErrorHandler from "@/routers/utils/errors/ErrorHandler";
import routes from "@/utils/constants/routes";

/** Applications router */
const appRouter = createBrowserRouter([
    {
        errorElement: <ErrorHandler />,
        children: [
            // Redirect to daily schedule
            {
                index: true,
                element: <Navigate to={routes.dailyschedule()} />,
            },
            // Show the daily schedule page
            {
                path: routes.dailyschedule(),
                children: [LessonsRouter],
            },
            // Error page
            {
                path: routes.error(),
                children: [ErrorRouter],
            },
        ],
    },
]);

/** Returns the applications router provider (i.e. app entry point). */
const App = () => <RouterProvider router={appRouter} />;

export default App;
