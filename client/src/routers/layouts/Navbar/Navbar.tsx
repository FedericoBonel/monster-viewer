import { Outlet, useMatch } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "@/utils/constants/routes";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import {
    RightButtonsContainerStyles,
    DrawerToggleButton,
    RightButtonStyles,
} from "./styles";
import messages from "@/utils/constants/messages";

/** Layout that renders the navbar of the application on nested routes */
const Navbar = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
    const match = useMatch("/:selectedMenu/*");
    const selectedMenu = `/${match?.params.selectedMenu}`;

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    const navButtons = (
        <>
            <Button
                to={routes.dailyschedule()}
                component={Link}
                onClick={toggleDrawer}
                variant={
                    selectedMenu === routes.dailyschedule()
                        ? "outlined"
                        : "text"
                }
            >
                {messages.navbar.links.lessonsByGym}
            </Button>
            <Button
                to={routes.terms(routes.privacy())}
                component={Link}
                onClick={toggleDrawer}
                variant={selectedMenu === routes.terms() ? "outlined" : "text"}
            >
                {messages.navbar.links.privacy}
            </Button>
        </>
    );

    return (
        <Box display="flex" flexDirection="column">
            <AppBar
                elevation={0}
                position="sticky"
                component="nav"
                color="inherit"
                variant="outlined"
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={DrawerToggleButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <DesktopNavbar>{navButtons}</DesktopNavbar>
                    <Box sx={RightButtonsContainerStyles}>
                        <Button
                            component={Link}
                            to={routes.tipping()}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            color="info"
                            disableElevation
                            sx={RightButtonStyles}
                        >
                            {messages.navbar.links.tipping}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <MobileNavbar open={drawerIsOpen} onClose={toggleDrawer}>
                {navButtons}
            </MobileNavbar>
            <Outlet />
        </Box>
    );
};

export default Navbar;
