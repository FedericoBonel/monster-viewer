import { Navigate, useRouteError } from "react-router-dom";
import { AxiosError } from "axios";
import routes from "@/utils/constants/routes";

/** Component that handles application errors and redirects user as necessary. */
const ErrorHandler = () => {
    // Extract the error that happened and its code if it has any
    const error = useRouteError() as AxiosError;
    const code = error?.response?.status ?? 500;

    // Redirect user to error page
    return <Navigate to={`${routes.error}/${code}`} />;
};

export default ErrorHandler;
