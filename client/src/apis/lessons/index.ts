import makeRequest from "@/lib/axios/makeRequest";
import LessonItem from "../dtos/lessons/LessonItem";
import SuccessfulResponse from "../dtos/responses/SuccessfulResponse";
import LessonsAPI from "./types";
import apis from "@/utils/constants/apis";

const lessonsAPI: LessonsAPI = {
    getDailySchedule: async (
        selectedDate: Date
    ): Promise<SuccessfulResponse<Record<string, LessonItem[]>>> =>
        makeRequest({
            baseURL: apis.bmonster.getDailySchedule(selectedDate),
            method: "get",
        }),
};

export default lessonsAPI;
