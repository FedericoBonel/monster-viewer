import StudiosConstants from "./types";
import BMonsterStudios from "./BMonsterStudios";

const studiosConstants: Readonly<StudiosConstants> = {
    studios: Object.keys(BMonsterStudios).filter((bmonName) =>
        isNaN(Number(bmonName))
    ),
    plannedScheduleByStudio: {
        [BMonsterStudios[1]]: [
            "6:50",
            "8:10",
            "9:30",
            "10:50",
            "12:10",
            "13:30",
            "14:50",
            "16:10",
            "17:30",
            "18:50",
            "20:05",
            "21:20",
        ],
        [BMonsterStudios[2]]: [
            "6:50",
            "8:15",
            "9:50",
            "11:25",
            "12:50",
            "14:15",
            "15:40",
            "17:05",
            "18:30",
            "19:55",
            "21:20",
        ],
        [BMonsterStudios[3]]: [
            "6:50",
            "8:15",
            "9:50",
            "11:25",
            "12:50",
            "14:15",
            "15:40",
            "17:05",
            "18:30",
            "19:55",
            "21:20",
        ],
        [BMonsterStudios[4]]: [
            "6:50",
            "8:15",
            "9:50",
            "11:25",
            "12:50",
            "14:15",
            "15:40",
            "17:05",
            "18:30",
            "19:55",
            "21:20",
        ],
        [BMonsterStudios[5]]: [
            "6:50",
            "8:15",
            "9:50",
            "11:25",
            "12:50",
            "14:15",
            "15:40",
            "17:05",
            "18:30",
            "19:55",
            "21:20",
        ],
        [BMonsterStudios[6]]: [
            "6:50",
            "8:15",
            "9:50",
            "11:25",
            "13:00",
            "14:35",
            "16:10",
            "17:35",
            "19:00",
            "20:25",
            "21:50",
        ],
        [BMonsterStudios[7]]: [
            "6:50",
            "8:15",
            "9:50",
            "11:25",
            "13:00",
            "14:35",
            "16:10",
            "17:35",
            "19:00",
            "20:25",
            "21:50",
        ],
    },
    lessonDuration: 55,
};

export default studiosConstants;