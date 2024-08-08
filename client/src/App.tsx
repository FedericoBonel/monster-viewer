import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import ErrorHandler from "@/routers/utils/errors/ErrorHandler";
import routes from "./utils/constants/routes";

/** Applications router */
const appRouter = createBrowserRouter([
    {
        errorElement: <ErrorHandler />,
        children: [
            // Redirect to daily schedule
            {
                path: routes.home,
                element: <Navigate to={routes.dailyschedule} />,
            },
            // Show the daily schedule page
            {
                path: routes.dailyschedule,
                element: <h1>Hello there</h1>,
            }
        ],
    },
]);

/** Returns the applications router provider (i.e. app entry point). */
const App = () => <RouterProvider router={appRouter}/>;

export default App;
