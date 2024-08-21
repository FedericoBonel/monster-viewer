import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DailyScheduleList from "@/features/lessons/DailyScheduleList";
import { PageWrapperStyles } from "./styles";

/** Renders the daily schedule page */
const LessonsPage = () => {
    return (
        <Grid container>
            <Grid xs={12} sx={PageWrapperStyles} component="main">
                <DailyScheduleList />
            </Grid>
        </Grid>
    );
};

export default LessonsPage;
