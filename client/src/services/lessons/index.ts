import { Dayjs } from "dayjs";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import lessonsAPI from "@/apis/lessons";
import SuccessfulResponse from "@/apis/dtos/responses/SuccessfulResponse";
import LessonItem from "@/apis/dtos/lessons/LessonItem";
import validation from "@/utils/constants/validation";
import lessonsCaches from "../caches/lessons";
import LessonsServices from "./types";

const lessonsServices: LessonsServices = {
    useDailySchedule: (
        selectedDate: Dayjs
    ): UseQueryResult<Record<string, LessonItem[]>> =>
        useQuery({
            queryKey: lessonsCaches.dailySchedule(
                selectedDate.format(validation.dates.dateFormat)
            ),
            queryFn: async () => {
                const receivedLessons: SuccessfulResponse<
                    Record<string, LessonItem[]>
                > = await lessonsAPI.getDailySchedule(selectedDate.toDate());

                return receivedLessons.data;
            },
            throwOnError: (error: Error) => Boolean(error),
            // Refetch every 30 minutes since this data wont change that much
            refetchInterval: 108000000,
        }),
};

export default lessonsServices;
