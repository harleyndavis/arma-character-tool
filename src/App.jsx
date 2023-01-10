import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import GuildPicker from './components/GuildPicker'
import GuildCompare from './components/GuildCompare'
import SkillPicker from './components/SkillPicker'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import themeOverrides from './theme.js';
const theme = createTheme(themeOverrides);

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Route path="/arma-character-tool/" exact component={GuildPicker} />
                    <Route path="/arma-character-tool/class-picker/" component={GuildPicker} />
                    <Route path="/arma-character-tool/class-compare/" component={GuildCompare} />
                    <Route path="/arma-character-tool/skill-picker/" component={SkillPicker} />
                </Layout>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
