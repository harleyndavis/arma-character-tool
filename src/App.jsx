import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import GuildPicker from './components/GuildPicker'
import GuildCompare from './components/GuildCompare'
import SkillPicker from './components/SkillPicker'
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#d84315",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },
        secondary: {
            main: "#5d4037",
            contrastText: "rgba(255, 255, 255, 0.87)"
        },
        primary1Color: "#d84315",
        primary2Color: "#5d4037",
        accent1Color: "#eeeeee",
        accent2Color: "rgba(255, 236, 179, 0.3)",
        accent3Color: "#ff8f00"
    },
    tabs: {
        backgroundColor: "#e64a19",
        textColor: "rgba(33, 33, 33, 0.54)"
    },
    tableRow: {
        selectedColor: "rgba(255, 255, 255, 0.1)",
        hoverColor: "rgba(255, 236, 179, 0.15)"
    },
    toggle: {
        thumbOffColor: "rgba(255, 236, 179, 0.51)",
        labelDisabledColor: "rgba(255, 255, 255, 0.29)",
        thumbDisabledColor: "rgba(255, 255, 255, 0.48)"
    }
});

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Router>
                    <Layout>
                        <Route path="/" exact component={GuildPicker} />
                        <Route path="/arma-character-tool/" exact component={GuildPicker} />
                        <Route path="/arma-character-tool/class-picker/" component={GuildPicker} />
                        <Route path="/arma-character-tool/class-compare/" component={GuildCompare} />
                        <Route path="/arma-character-tool/skill-picker/" component={SkillPicker} />
                    </Layout>
                </Router>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
