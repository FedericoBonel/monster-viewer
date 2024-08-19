import Studio from "../../models/studios/index.js";
import StudioInterface from "../../models/studios/types.js";
import StudiosRepositories from "./types.js";

const studiosRepository: StudiosRepositories = {
    upsertMany: async (studios: Iterable<StudioInterface>): Promise<void> => {
        await Studio.bulkWrite(
            Array.from(studios).map((studio) => ({
                updateOne: {
                    filter: { name: studio.name },
                    update: { $set: studio },
                    upsert: true,
                },
            })),
            { skipValidation: false }
        );
    },
    getAll: async (): Promise<StudioInterface[]> => {
        return await Studio.find().lean();
    }
};

export default studiosRepository;
