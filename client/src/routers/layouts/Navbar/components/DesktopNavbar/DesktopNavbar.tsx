import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo";
import { NavbarListStyles } from "./styles";

interface DesktopNavbarProps {
    /** The children to render inside the navbar */
    children: ReactNode;
}

/** Renders the navbar links for desktop devices (At the top with a logo) */
const DesktopNavbar = ({ children }: DesktopNavbarProps) => {
    return (
        <>
            <Logo variant="desktop" />
            <Box sx={NavbarListStyles}>{children}</Box>
        </>
    );
};

export default DesktopNavbar;
