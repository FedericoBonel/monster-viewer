import Difficulty from "../../models/difficulties/index.js";
import DifficultyInterface from "../../models/difficulties/types.js";
import DifficultyRepositories from "./types.js";

const difficultiesRepository: DifficultyRepositories = {
    upsertMany: async (
        difficulties: Iterable<DifficultyInterface>
    ): Promise<void> => {
        await Difficulty.bulkWrite(
            Array.from(difficulties).map((difficulty) => ({
                updateOne: {
                    filter: { name: difficulty.name },
                    update: { $set: difficulty },
                    upsert: true,
                },
            })),
            { skipValidation: false }
        );
    },
    getAll: async (): Promise<DifficultyInterface[]> => {
        return await Difficulty.find().lean();
    },
};

export default difficultiesRepository;
