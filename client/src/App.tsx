import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Navbar from "@/routers/layouts/Navbar";
import LessonsRouter from "@/routers/lessons";
import TermsRouter from "@/routers/terms";
import ErrorRouter from "@/routers/errors";
import ErrorHandler from "@/routers/utils/errors/ErrorHandler";
import routes from "@/utils/constants/routes";

/** Applications router */
const appRouter = createBrowserRouter([
    {
        errorElement: <ErrorHandler />,
        element: <Navbar />,
        children: [
            // Redirect to daily schedule
            {
                index: true,
                element: <Navigate to={routes.dailyschedule()} />,
            },
            // Show the daily schedule pages
            {
                path: routes.dailyschedule(),
                children: [LessonsRouter],
            },
            // Show the terms and policies pages
            {
                path: routes.terms(),
                children: [TermsRouter],
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
