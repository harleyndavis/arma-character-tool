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
import ArmLogo from './ArmLogo.js';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const styles = (theme) => ({
    appBar: {
        ...theme.appBar
    },
    appTitle: {
        paddingRight: 32,
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            paddingRight: 12,
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        opacity: 0.69,
        '&>button': {
            fontWeight: 600,
            margin: '0 4px',
            padding: '4px',
        },
    },
    sideNavLink: {
        textDecoration: 'none',
        '&>button > span': {
            color: 'white',
            [theme.breakpoints.down('sm')]: {
                fontSize: 10,
            }
        },
    },
    horizontalNavLinks: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    menuButton: {
        width: 64,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    activeLink: {
        opacity: 1,
    },
});

const NavBar = ({
    classes,
}) => {
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
        <AppBar position="static" className={classes.appBarContainer}>
            <Toolbar disableGutters sx={{ width: 1 }}>
                <Typography
                    variant="h4"
                    component="a"
                    href="/"
                    sx={{
                        ml: 2,
                        fontFamily: 'monospace',
                        fontWeight: '1000',
                        letterSpacing: '.3rem',
                        color: 'rgba(158, 31, 31, 0.8)',
                        textDecoration: 'none',
                        display: { xs: 'none', sm: 'none', lg: 'flex' }
                    }}
                > Armageddon MUD Character Tool
                </Typography>
                <Box sx={{ my: 2, display: { sm: 'flex', lg: 'none' } }}>
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
                    variant="h4"
                    component="a"
                    href="/"
                    sx={{
                        flexGrow: 1,
                        display: { sm: 'flex', lg: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: '1000',
                        letterSpacing: '.3rem',
                        color: 'rgba(158, 31, 31, 0.8)',
                        textDecoration: 'none',
                    }}
                > Character Tool
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', lg: 'flex' }, justifyContent: "space-evenly" }}>
                    {navLinks.map((navLink) => (
                        <Button
                            noWrap
                            href={navLink.to}
                            key={navLink.label}
                            onClick={handleCloseNavMenu}
                            sx={{ fontSize: '20', fontWeight: 'bold', display: 'inline' }}
                        >
                            {navLink.label}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ my:2, mr: 2, justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
                    <TimeComponent />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default withRouter(withStyles(styles)(NavBar));