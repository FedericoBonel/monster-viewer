import { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DatePickerStyles, DatePickerSelectedStyles } from "./styles";

interface DatePicker {
    /** The date that is currently being selected */
    selectedDate: Date;
    /** The handler of the next date button (normally this should make the selected date one day in the future) */
    onClickNext: MouseEventHandler;
    /** The handler of the previous date button (normally this should make the selected date one day in the past) */
    onClickPrev: MouseEventHandler;
}

/** Renders a date picker with arrow nagivation and calendar picker */
const DatePicker = ({ selectedDate, onClickNext, onClickPrev }: DatePicker) => {
    return (
        <Box sx={DatePickerStyles}>
            <IconButton
                aria-label="calendar-picker"
                color="primary"
                size="large"
            >
                <CalendarMonthIcon fontSize="inherit" />
            </IconButton>
            <IconButton
                aria-label="previous-day"
                color="primary"
                size="large"
                onClick={onClickPrev}
            >
                <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
            <Typography
                variant="body1"
                fontSize="1.2rem"
                sx={DatePickerSelectedStyles}
            >
                {selectedDate.toLocaleDateString()}
            </Typography>
            <IconButton
                aria-label="next-day"
                color="primary"
                size="large"
                onClick={onClickNext}
            >
                <ChevronRightIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
};

export default DatePicker;
