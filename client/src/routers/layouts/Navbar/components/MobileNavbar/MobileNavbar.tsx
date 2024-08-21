import { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import Logo from "../Logo";
import { DrawerStyles } from "./styles";

interface MobileNavbarProps {
    /** If the navbar is open or not */
    open: boolean;
    /** The function to execute when the navbar should close */
    onClose: () => void;
    /** The buttons to be rendered inside the drawer */
    children: ReactNode;
}

/** Renders the mobile drawer for the navbar (The drawer) */
const MobileNavbar = ({ open, onClose, children }: MobileNavbarProps) => {
    return (
        <Drawer
            component="nav"
            open={open}
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            sx={DrawerStyles}
        >
            <Logo variant="mobile" />
            {children}
        </Drawer>
    );
};

export default MobileNavbar;
