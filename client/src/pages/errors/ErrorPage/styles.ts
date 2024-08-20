import { SxProps } from "@mui/material/styles";

export const ImgContainerStyles: SxProps = {
    justifyContent: { xs: "center", md: "flex-end" },
    alignItems: "center",
    display: "flex",
};

export const ImgStyles: SxProps = {
    width: "100%",
    maxWidth: {
        xs: 500,
        md: 600,
    },
};

export const MsgContainerStyles: SxProps = {
    justifyContent: { xs: "flex-start", md: "center" },
    alignItems: { xs: "center", md: "flex-start" },
    display: "flex",
    flexDirection: "column",
    textAlign: {
        xs: "center",
        md: "left",
    },
};
