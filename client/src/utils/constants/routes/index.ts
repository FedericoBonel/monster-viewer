import Routes from "./types";

const routes: Routes = {
    home: () => "/",
    dailyschedule: (date?: string) =>
        `/dailyschedule?${date ? `date=${date}` : ""}`,
    error: (code?: number) => `/error${code ? `/${code}` : ""}`,
    lesson: (lessonId?: string) =>
        `https://b-monster.hacomono.jp/reserve/space/${lessonId}`,
};

export default routes;
