import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import messages from "@/utils/constants/messages";
import routes from "@/utils/constants/routes";
import TextSection from "../components/TextSection";
import { HeaderStyles } from "./styles";

/** Renders the terms for the privacy page */
const PrivacyPage = () => {
    return (
        <Grid container padding={4} component="main">
            <Grid sx={HeaderStyles}>
                <Typography variant="h3" component="h1">
                    {messages.terms.privacy.pageHeader}
                </Typography>
            </Grid>
            {/* Advertisement distribution policy section */}
            <TextSection
                header={messages.terms.privacy.advertisementDistr.subHeader}
                body={messages.terms.privacy.advertisementDistr.description}
                link={{
                    text: messages.terms.privacy.advertisementDistr.link,
                    url: routes.advertisementDist(),
                }}
            />
            {/* Data collection and usage section */}
            <TextSection
                header={messages.terms.privacy.dataAnalysis.subHeader}
                body={messages.terms.privacy.dataAnalysis.description}
                link={{
                    text: messages.terms.privacy.dataAnalysis.link,
                    url: routes.advertisementDist(),
                }}
            />
        </Grid>
    );
};

export default PrivacyPage;
