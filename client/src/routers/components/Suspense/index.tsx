import { Suspense as ReactSuspense, ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { SpinnerContainerStyles, SpinnerStyles } from "./styles";

interface SuspenseProps {
    children: ReactNode;
}

/** Displays a fallback until its children have finished loading */
const Suspense = ({ children }: SuspenseProps) => {
    return (
        <ReactSuspense
            fallback={
                <Box sx={SpinnerContainerStyles}>
                    <CircularProgress size={64} sx={SpinnerStyles} />
                </Box>
            }
        >
            {children}
        </ReactSuspense>
    );
};

export default Suspense;
