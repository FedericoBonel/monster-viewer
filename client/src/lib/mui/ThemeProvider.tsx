import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
} from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme();

interface ThemeProviderProps {
    children: React.ReactNode;
}

/**
 * Theme provider for the application. Makes the theme available down the react tree.
 *
 * It should preferably be used at the root of your component tree.
 */
const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </MUIThemeProvider>
        </LocalizationProvider>
    );
};

export default ThemeProvider;
