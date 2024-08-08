import { ReactElement } from "react";
import ScheduleColumn from "@/components/schedules/ScheduleColumn";
import ScheduleColumnCell from "@/components/schedules/ScheduleColumnCell";
import ScheduleColumnHeader from "@/components/schedules/ScheduleColumnHeader";
import LessonItemDTO from "@/apis/dtos/lessons/LessonItemDTO";
import toTimeString from "@/utils/dates/toTimeString";
import routes from "@/utils/constants/routes";

interface StudioProps {
    /** The name of the studio. This is the header of the column */
    studioName: string;
    /** The lessons to be shown. This is the schedule of lessons for the day, AKA the cells in the column. */
    lessons: LessonItemDTO[];
}

/** Renders a studio column in a daily schedule with all its lessons for the day as cells */
const Studio = ({ studioName, lessons }: StudioProps) => {
    const lessonCells: ReactElement[] = lessons.map((lesson) => (
        <ScheduleColumnCell
            key={lesson._id}
            title={lesson.performer.name}
            subtitleTop={toTimeString(new Date(lesson.time))}
            subtitleBottom={lesson.program.name}
            href={routes.lesson(lesson._id)}
        />
    ));

    return (
        <ScheduleColumn>
            <ScheduleColumnHeader title={studioName} />
            {lessonCells}
        </ScheduleColumn>
    );
};

export default Studio;
