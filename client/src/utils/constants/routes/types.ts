/** Routes to different pages in client */
export default interface Routes {
    /** Creates home page route */
    home: () => string;
    /** Creates daily schedule page route */
    dailyschedule: (date?: string) => string;
    /** Creates the error page route */
    error: (code?: number) => string;
    /** Creates the route to go to the lesson reservation page */
    lesson: (lessonId: string) => string;
}
