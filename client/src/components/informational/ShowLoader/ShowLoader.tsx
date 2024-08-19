import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface ShowLoaderProps {
    /** Children to be rendered once the isLoading prop is false */
    children: ReactNode;
    /** If true a spinner or the fallback will be shown */
    isLoading: boolean;
    /** A fallback to show while loading, optional if not provided a spinner will be shown */
    fallback?: ReactNode;
}

/** Renders a loader fallback when its children are loading. */
const ShowLoader = ({ children, isLoading, fallback }: ShowLoaderProps) => {
    const fallbackToShow = fallback ?? <CircularProgress />;

    return isLoading ? fallbackToShow : children;
};

export default ShowLoader;
