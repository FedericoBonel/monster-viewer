import config from "@/config/index.js";
import connectToDB from "@/utils/db/connect.js";
import logger from "@/utils/logger/index.js";
import startScrapeAndStoreJob from "@/job.js";

/** Starts the main job */
const startJob = async () => {
    try {
        // Connect to database
        await connectToDB(config.db.url);
        logger.info("Connected to database");
        // Start the scraping job
        await startScrapeAndStoreJob();
    } catch (error) {
        const castedError = error as Error;
        logger.error("An error happened during job execution", castedError);
        process.exit(1);
    }
};

startJob()
    .then(() => {
        logger.info("Job finished");
        process.exit();
    })
    .catch((reason) => {
        logger.error("An error happened", reason);
        process.exit(1);
    });
