import Performer from "../../models/performers/index.js";
import PerformerInterface from "../../models/performers/types.js";
import PerformerRepositories from "./types.js";

const performersRepository: PerformerRepositories = {
    upsertMany: async (
        performers: Iterable<PerformerInterface>
    ): Promise<void> => {
        await Performer.bulkWrite(
            Array.from(performers).map((performer) => ({
                updateOne: {
                    filter: { name: performer.name },
                    update: { $set: performer },
                    upsert: true,
                },
            })),
            { skipValidation: false }
        );
    },
    getAll: async (): Promise<PerformerInterface[]> => {
        return await Performer.find().lean();
    },
};

export default performersRepository;
