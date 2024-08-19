import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { ColumnStyles } from "./styles";

interface ScheduleColumnProps {
    /** The schedule cells to be rendered inside the schedule column */
    children: ReactNode;
}

/** Renders a schedule column that should be contained inside a schedule */
const ScheduleColumn = ({ children }: ScheduleColumnProps) => {
    return (
        <Stack direction="column" gap={1} sx={ColumnStyles}>
            {children}
        </Stack>
    );
};

export default ScheduleColumn;
