import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TimeComponent from './TimeComponent.js';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';


function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navLinks = [
        {
            to: '/arma-character-tool/class-picker/',
            label: 'Class Picker'
        },
        {
            to: '/arma-character-tool/class-compare/',
            label: 'Class Compare'
        },
        {
            to: '/arma-character-tool/skill-picker/',
            label: 'Skill Picker'
        },
    ];

    return (
        <AppBar position="static" style={{ bgColor: 'primary' }}>
                <Toolbar disableGutters sx={{ alignContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mx: 2,
                            display: { xs: 'none', sm: 'none', lg: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    > Armageddon MUD Character Tool
                    </Typography>

                    <Box sx={{ my: 2, display: { sm: 'inline', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { sm: 'inline', lg: 'none' },
                            }}
                        >
                            {navLinks.map((navLink) => (
                                <MenuItem component={Link} to={navLink.to} key={navLink.label} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{navLink.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { md: 'flex', lg: 'none' },
                            flexGrow: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Character Tool
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', lg: 'flex' }, justifyContent: "space-evenly" }}>
                        {navLinks.map((navLink) => (
                            <Button
                                href={navLink.to}
                                key={navLink.label}
                                onClick={handleCloseNavMenu}
                                sx={{ fontSize: '20', fontWeight: 'bold', display: 'inline' }}
                            >
                                {navLink.label}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ m: 2, justifyContent: 'center', display: { xs: 'none', sm: 'block' } }}>
                        <TimeComponent />
                    </Box>
                </Toolbar>            
        </AppBar>
    );
}
export default withRouter(NavBar);