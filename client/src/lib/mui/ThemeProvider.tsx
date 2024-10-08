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
import { jaJP } from "@mui/x-date-pickers/locales";
import "dayjs/locale/ja";

const theme = createTheme({}, jaJP);

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
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            // This comes from the dayjs library
            adapterLocale="ja"
            // This comes from the MUI library for the pickers and menus
            localeText={
                jaJP.components.MuiLocalizationProvider.defaultProps.localeText
            }
        >
            <MUIThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </MUIThemeProvider>
        </LocalizationProvider>
    );
};

export default ThemeProvider;
