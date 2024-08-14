import { SxProps } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

/** 
 * Creates the styles for the card 
 * @param disabled If the card is disabled or not
 */
export const ScheduleCellCardStyles = (disabled: boolean): SxProps => ({
    width: 160,
    textAlign: "center",
    textDecoration: "none",
    height: 110,
    backgroundColor: disabled ? grey[300] : undefined,
});

export const ScheduleCellCardActionAreaStyles: SxProps = {
    height: "100%",
};

export const ScheduleCellTitleStyles: SxProps = {
    alignItems: "center",
    justifyContent: "center",
};
