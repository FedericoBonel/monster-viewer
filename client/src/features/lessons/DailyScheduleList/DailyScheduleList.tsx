import { useSearchParams } from "react-router-dom";
import { Dayjs } from "dayjs";
import dayjs from "@/lib/dayjs/instance";
import lessonsServices from "@/services/lessons";
import DatePicker from "@/components/fields/DatePicker";
import Schedule from "@/components/schedules/Schedule";
import ShowLoader from "@/components/informational/ShowLoader";
import createDateFrom from "@/utils/dates/createDateFrom";
import validation from "@/utils/constants/validation";
import studiosConstants from "@/utils/constants/studios";
import Studio from "./components/Studio";

/** Renders the schedule by day grouped by studios */
const DailyScheduleList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedDate: Dayjs = createDateFrom(searchParams.get("date"));

    const onClickPrevDay = (newValue: Dayjs) => {
        setSearchParams({ date: newValue.format(validation.dates.dateFormat) });
    };

    const onClickNextDay = (newValue: Dayjs) => {
        setSearchParams({ date: newValue.format(validation.dates.dateFormat) });
    };

    const onSelectDate = (newValue: Dayjs | null) => {
        const newDate = newValue ?? dayjs();
        setSearchParams({ date: newDate.format(validation.dates.dateFormat) });
    };

    const dailyScheduleQuery = lessonsServices.useDailySchedule(selectedDate);

    // The columns with the schedule for each studio
    const studioColumns =
        dailyScheduleQuery.isSuccess &&
        studiosConstants.studios.map((studioName) => (
            <Studio
                key={studioName}
                studioName={studioName}
                lessons={dailyScheduleQuery.data[studioName]}
            />
        ));

    return (
        <>
            <DatePicker
                selectedDate={selectedDate}
                onClickNext={onClickNextDay}
                onClickPrev={onClickPrevDay}
                onSelectDate={onSelectDate}
                minDate={validation.dates.minDate}
                maxDate={validation.dates.maxDate}
            />
            <ShowLoader isLoading={dailyScheduleQuery.isPending}>
                <Schedule>{studioColumns}</Schedule>
            </ShowLoader>
        </>
    );
};

export default DailyScheduleList;
