import { memo, ReactNode } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import {
    ScheduleCellCardStyles,
    ScheduleCellTitleStyles,
    ScheduleCellCardActionAreaStyles,
} from "./styles";

interface ScheduleColumnCellProps {
    /** The message to show on the top subtitle */
    subtitleTop?: string;
    /** The message to show on the title */
    title?: string;
    /** The message to show on the bottom subtitle */
    subtitleBottom?: ReactNode;
    /** The link where the user should be redirected after clicking on the cell */
    href?: string;
    /** If true then the cell is disabled and not clickable */
    disabled?: boolean;
}

/** Renders a schedule column cell (Normally an event: Lesson, etc.) */
const ScheduleColumnCell = ({
    subtitleTop,
    title,
    subtitleBottom,
    href,
    disabled = false,
}: ScheduleColumnCellProps) => {
    return (
        <Card
            sx={ScheduleCellCardStyles(disabled)}
            component="a"
            href={href}
            rel="noreferrer noopener"
            target="_blank"
        >
            <CardActionArea
                sx={ScheduleCellCardActionAreaStyles}
                disabled={disabled}
            >
                <CardHeader
                    sx={ScheduleCellTitleStyles}
                    title={
                        <>
                            <Typography variant="subtitle2">
                                {subtitleTop}
                            </Typography>
                            <Typography fontSize="1.1rem">{title}</Typography>
                        </>
                    }
                    subheader={subtitleBottom}
                    subheaderTypographyProps={{ fontSize: "0.9rem" }}
                />
            </CardActionArea>
        </Card>
    );
};

export default memo(ScheduleColumnCell);
