import { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import { ScheduleStyles } from "./styles";

interface ScheduleProps {
    /** The schedule columns to be rendered inside the schedule */
    children: ReactNode;
}

/** Renders a schedule component that can contain schedule columns */
const Schedule = ({ children }: ScheduleProps) => {
    return (
        <Stack direction="row" sx={ScheduleStyles} gap={1}>
            {children}
        </Stack>
    );
};

export default Schedule;
