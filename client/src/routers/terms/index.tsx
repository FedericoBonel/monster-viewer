import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Suspense from "@/routers/components/Suspense";
import routes from "@/utils/constants/routes";
const PrivacyPage = lazy(() => import("@/pages/terms/PrivacyPage"));

/** This configuration object takes care of routing to all terms, conditions and policies pages. */
const TermsRouter: RouteObject = {
    children: [
        {
            path: routes.privacy(),
            element: (
                <Suspense>
                    <PrivacyPage />
                </Suspense>
            ),
        },
    ],
};

export default TermsRouter;
