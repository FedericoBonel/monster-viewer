/** Routes to different pages in client */
export default interface Routes {
    /** Creates Home route */
    home: () => string;
    /** Creates Daily schedule route */
    dailyschedule: (date?: string) => string;
    /** Creates Error route */
    error: (code?: number) => string;
}
