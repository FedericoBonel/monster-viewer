import { useSearchParams } from "react-router-dom";
import { Dayjs } from "dayjs";
import dayjs from "@/lib/dayjs/instance";
import Schedule from "@/components/schedules/Schedule";
import DatePicker from "@/components/fields/DatePicker";
import Studio from "./components/Studio";
import createDateFrom from "@/utils/dates/createDateFrom";
import validation from "@/utils/constants/validation";

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

    // TODO change this to actual query
    const dailyScheduleQuery = {
        data: {
            data: {
                SHINJUKU: [
                    {
                        _id: "myId1",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "HOSHI" },
                        program: { _id: "id", name: "Lite Program" },
                        difficulty: { _id: "someId", name: "🔰" },
                        time: "2024-08-07T23:15:00.000Z",
                    },
                    {
                        _id: "myId2",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "LINQ" },
                        program: { _id: "id", name: "SOUTH AMERICA" },
                        difficulty: { _id: "someId", name: "EVENT" },
                        time: "2024-08-08T02:25:00.000Z",
                    },
                    {
                        _id: "myId3",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "YUUHI" },
                        program: { _id: "id", name: "MIX4" },
                        difficulty: { _id: "someId", name: "難易度★★☆☆☆" },
                        time: "2024-08-08T05:15:00.000Z",
                    },
                    {
                        _id: "myId4",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "KALN" },
                        program: { _id: "id", name: "MIX1" },
                        difficulty: { _id: "someId", name: "難易度★★☆☆☆" },
                        time: "2024-08-08T06:40:00.000Z",
                    },
                    {
                        _id: "myId5",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "KAREN" },
                        program: { _id: "id", name: "EDM1" },
                        difficulty: { _id: "someId", name: "難易度★★★☆☆" },
                        time: "2024-08-08T08:05:00.000Z",
                    },
                    {
                        _id: "myId6",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "YUUHI" },
                        program: { _id: "someId", name: "Ad live" },
                        difficulty: { _id: "someId", name: "？？？" },
                        time: "2024-08-08T09:30:00.000Z",
                    },
                    {
                        _id: "myId7",
                        studio: { _id: "someString", name: "SHINJUKU" },
                        performer: { _id: "someId", name: "KAREN" },
                        program: { _id: "someId", name: "AFRICA" },
                        difficulty: { _id: "someId", name: "EVENT" },
                        time: "2024-08-08T12:20:00.000Z",
                    },
                ],
            },
        },
    };

    // The columns with the schedule for each studio
    const studioColumns = Object.keys(dailyScheduleQuery.data.data).map(
        (studioName) => {
            // TODO Delete this when getting info from actual back end
            const castedName =
                studioName as keyof typeof dailyScheduleQuery.data.data;
            return (
                <Studio
                    key={studioName}
                    studioName={studioName}
                    lessons={dailyScheduleQuery.data.data[castedName]}
                />
            );
        }
    );

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
            <Schedule>{studioColumns}</Schedule>
        </>
    );
};

export default DailyScheduleList;
