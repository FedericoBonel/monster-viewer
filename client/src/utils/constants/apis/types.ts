/** Routes to different api resources */
export default interface Apis {
    /** API resources for bmonster */
    bmonster: {
        /** Creates API resource to get daily schedule of lessons grouped by studio */
        getDailySchedule: (date: Date) => string;
    };
}
