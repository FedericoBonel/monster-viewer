import dayjs from "@/lib/dayjs/instance";
import Validation from "./types";

const validation: Validation = {
    dates: {
        maxDate: dayjs()
            .add(2, "week")
            .set("hours", 0)
            .set("minute", 0)
            .set("second", 0),
        minDate: dayjs()
            .subtract(2, "month")
            .set("hours", 0)
            .set("minute", 0)
            .set("second", 0),
        dateFormat: "YYYY-MM-DD",
        timeFormat: "H:mm"
    },
};

export default validation;
