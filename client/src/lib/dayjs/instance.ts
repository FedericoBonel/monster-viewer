import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

/** Dayjs instance with the necessary plugins for the application */
const instance = dayjs;

export default instance;
