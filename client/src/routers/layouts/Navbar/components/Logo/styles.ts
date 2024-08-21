import { SxProps } from "@mui/material/styles";

/** Builds the styles for the logo of the navbar depending on the size of the screen */
export const LogoStyles = (variant: "mobile" | "desktop"): SxProps => ({
    width: variant === "desktop" ? "48px" : "68px",
    height: variant === "desktop" ? "48px" : "68px",
    objectFit: "cover",
    borderRadius: 1,
    mr: variant === "desktop" ? 4 : undefined,
    my: variant === "desktop" ? undefined : 2,
    mx: variant === "desktop" ? undefined : "auto",
    display:
        variant === "desktop"
            ? { xs: "none", sm: "block" }
            : { xs: "block", sm: "none" },
});
