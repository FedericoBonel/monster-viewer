import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { SectionStyles } from "./styles";

interface TextSectionProps {
    /** The header of the section */
    header: string;
    /** The body of the section */
    body: string;
    /** The link that gets appended to the body. Should you provide this, make sure the text in the body introduces this link and makes sense */
    link?: {
        /** The text to show in the link */
        text: string;
        /** The URL of the link */
        url: string;
    };
}

/** Renders a text section for the terms, conditions and policies page with an optional link to more information */
const TextSection = ({ header, body, link }: TextSectionProps) => {
    return (
        <Grid sx={SectionStyles}>
            <Typography component="h2" variant="h4">
                {header}
            </Typography>
            <Typography component="p" variant="body1">
                {body}
                {link && (
                    <Typography
                        component="a"
                        target="_blank"
                        rel="noreferrer noopener"
                        href={link.url}
                    >
                        {link.text}
                    </Typography>
                )}
            </Typography>
        </Grid>
    );
};

export default TextSection;
