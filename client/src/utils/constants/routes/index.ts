import Routes from "./types";

const routes: Routes = {
    home: () => "/",
    dailyschedule: (date?: string) =>
        `/dailyschedule?${date ? `date=${date}` : ""}`,
    error: (code?: number) => `/error${code ? `/${code}` : ""}`,
};

export default routes;
