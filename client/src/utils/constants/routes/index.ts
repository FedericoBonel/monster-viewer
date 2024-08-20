import Routes from "./types";

const routes: Routes = {
    home: () => "/",
    dailyschedule: (date?: string) =>
        `/dailyschedule?${date ? `date=${date}` : ""}`,
    error: (code?: number) => `/error${code ? `/${code}` : ""}`,
    lesson: (lessonId?: string) =>
        `https://b-monster.hacomono.jp/reserve/space/${lessonId}`,
    terms: () => "/terms",
    privacy: () => "privacy",
    advertisementDist: () => "https://policies.google.com/technologies/ads?hl=ja",
    dataAnalysis: () => "https://marketingplatform.google.com/about/analytics/terms/jp/",
};

export default routes;
