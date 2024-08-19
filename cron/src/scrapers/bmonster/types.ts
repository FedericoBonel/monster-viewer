export interface ScrapedLesson {
    time: Date;
    perf: string;
    prog: string;
    diff: string;
    studio: string;
    bmonsterId: string;
}

export interface ScrapedLessonRaw {
    time: Date;
    studio?: string;
    perf?: string;
    prog?: string;
    diff?: string;
    bmonsterId?: string;
}