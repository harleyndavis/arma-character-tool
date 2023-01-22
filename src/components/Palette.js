import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: orange,
        secondary: {
            main: "#000000"
        }
    }
});

export default function Palette({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}