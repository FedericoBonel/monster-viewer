import Box from "@mui/material/Box";
import navbarIcon from "@/assets/navbarIcon.png";
import { LogoStyles } from "./styles";

interface LogoProps {
    variant: "desktop" | "mobile";
}

/** Renders the navbar app logo */
const Logo = ({ variant }: LogoProps) => {
    return (
        <Box component="img" src={navbarIcon} sx={LogoStyles(variant)}></Box>
    );
};

export default Logo;
