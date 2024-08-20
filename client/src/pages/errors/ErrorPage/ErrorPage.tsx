import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import ErrorIlus from "@/assets/errorilus.svg";
import routes from "@/utils/constants/routes";
import messages from "@/utils/constants/messages";
import { ImgContainerStyles, ImgStyles, MsgContainerStyles } from "./styles";

const getErrorCode = (code?: string): keyof typeof messages.errorPage => {
    switch (code) {
        case "429":
            return 429;
        default:
            return "general";
    }
};

/** Renders the error page for the error handler */
const ErrorPage = () => {
    const { code } = useParams<{ code: string }>();

    const msgKey = getErrorCode(code);
    const header = messages.errorPage[msgKey]?.header;
    const body = messages.errorPage[msgKey]?.body;
    const goBack = messages.errorPage[msgKey]?.goBack;

    return (
        <Grid container padding={4} minHeight={"100dvh"}>
            <Grid xs={12} md={6} sx={ImgContainerStyles}>
                <Box
                    component="img"
                    loading="lazy"
                    src={ErrorIlus}
                    sx={ImgStyles}
                ></Box>
            </Grid>
            <Grid xs={12} md={6} sx={MsgContainerStyles}>
                <Typography variant="h2">{header}</Typography>
                <Typography variant="body1">{body}</Typography>
                <Typography component="a" variant="body2" href={routes.home()}>
                    {goBack}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ErrorPage;
