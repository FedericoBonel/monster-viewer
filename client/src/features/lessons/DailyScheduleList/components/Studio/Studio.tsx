import dayjs from "@/lib/dayjs/instance";
import Chip from "@mui/material/Chip";
import LessonItem from "@/apis/dtos/lessons/LessonItem";
import ScheduleColumn from "@/components/schedules/ScheduleColumn";
import ScheduleColumnCell from "@/components/schedules/ScheduleColumnCell";
import ScheduleColumnHeader from "@/components/schedules/ScheduleColumnHeader";
import routes from "@/utils/constants/routes";
import validation from "@/utils/constants/validation";
import studiosConstants from "@/utils/constants/studios";
import isEvent from "./isEvent";

interface StudioProps {
    /** The name of the studio. This is the header of the column */
    studioName: string;
    /**
     * The lessons to be shown. This is the schedule of lessons for the day, AKA the cells in the column.
     *
     * NOTE: The lessons should be ordered by time.
     */
    lessons: LessonItem[];
}

/** Renders a studio column in a daily schedule with all its lessons for the day as cells */
const Studio = ({ studioName, lessons }: StudioProps) => {
    let currLesson = 0;

    const lessonCells = studiosConstants.plannedScheduleByStudio[
        studioName
    ]?.map((studioSchedule, index) => {
        // Check if there is a lesson in the current scheduled time being rendered
        const lesson = lessons[currLesson];
        const formattedTime = dayjs(lesson?.time).format(
            validation.dates.timeFormat
        );
        const lessonOnSchedule = formattedTime === studioSchedule;

        if (lessonOnSchedule) {
            // If there is one then rendered it and increment the current lesson index
            currLesson++;
            const timeStr = `${formattedTime} - ${dayjs(lesson.time)
                .add(studiosConstants.lessonDuration, "m")
                .format(validation.dates.timeFormat)}`;
            return (
                <ScheduleColumnCell
                    key={lesson._id}
                    title={lesson.performer.name}
                    subtitleTop={timeStr}
                    subtitleBottom={
                        <Chip
                            label={lesson.program.name}
                            color={
                                isEvent(lesson.difficulty.name)
                                    ? "success"
                                    : undefined
                            }
                        />
                    }
                    href={routes.lesson(lesson._id)}
                />
            );
        } else {
            // If not it means that the next planned lesson is skipping the current scheduled time
            return <ScheduleColumnCell key={`empty-${index}`} disabled />;
        }
    });

    return (
        <ScheduleColumn>
            <ScheduleColumnHeader title={studioName} />
            {lessonCells}
        </ScheduleColumn>
    );
};

export default Studio;
