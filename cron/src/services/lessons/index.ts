import { ScrapedLesson } from "@/scrapers/bmonster/types.js";
import Performer from "@/models/performers/types.js";
import Difficulty from "@/models/difficulties/types.js";
import Studio from "@/models/studios/types.js";
import Program from "@/models/programs/types.js";
import lessonsRepository from "@/repositories/lessons/index.js";
import performersRepository from "@/repositories/performers/index.js";
import difficultiesRepository from "@/repositories/difficulties/index.js";
import studiosRepository from "@/repositories/studios/index.js";
import programsRepository from "@/repositories/programs/index.js";
import LessonsServices from "./types.js";

const lessonsServices: LessonsServices = {
    saveAll: async (lessons: ScrapedLesson[]): Promise<void> => {
        // Parse the data received as it should be stored
        const performers = new Set<Performer>(
            lessons.map((lesson) => ({ name: lesson.perf }))
        );
        const difficulties = new Set<Difficulty>(
            lessons.map((lesson) => ({ name: lesson.diff }))
        );
        const studios = new Set<Studio>(
            lessons.map((lesson) => ({ name: lesson.studio }))
        );
        const programs = new Set<Program>(
            lessons.map((lesson) => ({ name: lesson.prog }))
        );

        // Save the parsed data
        await performersRepository.upsertMany(performers);
        await difficultiesRepository.upsertMany(difficulties);
        await studiosRepository.upsertMany(studios);
        await programsRepository.upsertMany(programs);

        // Get all the newly saved data (which would be the one that should be denormalized in new lessons)
        const storedPerformers = await performersRepository.getAll();
        const perfTable: Record<string, Performer> = {};
        storedPerformers.forEach((perf) => {
            perfTable[perf.name] = perf;
        });

        const storedDifficulties = await difficultiesRepository.getAll();
        const diffTable: Record<string, Difficulty> = {};
        storedDifficulties.forEach((diff) => {
            diffTable[diff.name] = diff;
        });

        const storedStudios = await studiosRepository.getAll();
        const studiosTable: Record<string, Studio> = {};
        storedStudios.forEach((stud) => {
            studiosTable[stud.name] = stud;
        });

        const storedPrograms = await programsRepository.getAll();
        const programTable: Record<string, Studio> = {};
        storedPrograms.forEach((stud) => {
            programTable[stud.name] = stud;
        });

        // Denormalize the data in the new lessons and saved them
        await lessonsRepository.upsertMany(
            lessons.map((lesson) => ({
                bmonsterId: lesson.bmonsterId,
                studio: studiosTable[lesson.studio],
                performer: perfTable[lesson.perf],
                program: programTable[lesson.prog],
                difficulty: diffTable[lesson.diff],
                time: lesson.time,
            }))
        );
    },
};

export default lessonsServices;
