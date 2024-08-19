import Program from "../../models/programs/index.js";
import ProgramInterface from "../../models/programs/types.js";
import ProgramsRepositories from "./types.js";

const programsRepository: ProgramsRepositories = {
    upsertMany: async (programs: Iterable<ProgramInterface>): Promise<void> => {
        await Program.bulkWrite(
            Array.from(programs).map((program) => ({
                updateOne: {
                    filter: { name: program.name },
                    update: { $set: program },
                    upsert: true,
                },
            })),
            { skipValidation: false }
        );
    },
    getAll: async (): Promise<ProgramInterface[]> => {
        return await Program.find().lean();
    },
};

export default programsRepository;
