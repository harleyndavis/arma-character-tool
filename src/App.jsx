import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import GuildPicker from './components/GuildPicker'
import GuildCompare from './components/GuildCompare'
import SkillPicker from './components/SkillPicker'
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material/styles';
import themeOverrides from './theme.js';

const theme = createTheme(adaptV4Theme(themeOverrides));

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
