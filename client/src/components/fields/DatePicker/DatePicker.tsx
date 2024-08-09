import { MouseEventHandler } from "react";
import { Dayjs } from "dayjs";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DatePickerStyles } from "./styles";
import messages from "@/utils/constants/messages";

interface DatePicker {
    /** The date that is currently being selected */
    selectedDate: Dayjs;
    /** The handler of the next date button (normally this should make the selected date one day in the future) */
    onClickNext: (value: Dayjs) => void;
    /** The handler of the previous date button (normally this should make the selected date one day in the past) */
    onClickPrev: (value: Dayjs) => void;
    /** The handler of the selection of a date from date picker calendar, receives the new value */
    onSelectDate: (value: Dayjs | null) => void;
    /** The max selectable date */
    minDate: Dayjs;
    /** The minimum selectable date */
    maxDate: Dayjs;
}

/** Renders a date picker with arrow nagivation and calendar picker */
const DatePicker = ({
    selectedDate,
    onClickNext,
    onClickPrev,
    onSelectDate,
    minDate,
    maxDate,
}: DatePicker) => {
    const handlePrev: MouseEventHandler = () => {
        if (selectedDate.isAfter(minDate)) {
            onClickPrev(selectedDate.subtract(1, "day"));
        }
    };

    const handleNext: MouseEventHandler = () => {
        if (selectedDate.add(1, "day").isBefore(maxDate)) {
            onClickNext(selectedDate.add(1, "day"));
        }
    };

    const disablePrevButton = !selectedDate.isAfter(minDate);
    const disableNextButton = !selectedDate.add(1, "day").isBefore(maxDate);

    return (
        <Box sx={DatePickerStyles}>
            <IconButton
                aria-label="previous-day"
                color="primary"
                size="large"
                onClick={handlePrev}
                sx={{ fontSize: 40 }}
                disabled={disablePrevButton}
            >
                <ChevronLeftIcon fontSize="inherit" />
            </IconButton>
            <MUIDatePicker
                // TODO: Also check if you can add dayjs in a lib for better centralization and extract format there or in constants or utils date
                label={messages.datePicker.label}
                value={selectedDate}
                onChange={onSelectDate}
                slotProps={{
                    textField: {
                        InputProps: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarMonthIcon />
                                </InputAdornment>
                            ),
                        },
                        fullWidth: true,
                        sx: { maxWidth: { md: "50%" } },
                    },
                }}
                minDate={minDate}
                maxDate={maxDate}
            />
            <IconButton
                aria-label="next-day"
                color="primary"
                size="large"
                onClick={handleNext}
                sx={{ fontSize: 40 }}
                disabled={disableNextButton}
            >
                <ChevronRightIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
};

export default DatePicker;