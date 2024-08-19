import { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {
    ScheduleHeaderCardStyles,
    ScheduleHeaderCardTitleStyles,
} from "./styles";

interface ScheduleColumnHeaderProps {
    /** The title to be shown in the cell */
    title: string;
}

/** Renders a schedule column header cell (To show one single title that describes the column, i.g. Studios, dates, etc.) */
const ScheduleColumnHeader = ({ title }: ScheduleColumnHeaderProps) => {
    return (
        <Card sx={ScheduleHeaderCardStyles}>
            <CardHeader
                sx={ScheduleHeaderCardTitleStyles}
                title={title}
                titleTypographyProps={{ fontSize: "1.1rem" }}
            />
        </Card>
    );
};

export default memo(ScheduleColumnHeader);
