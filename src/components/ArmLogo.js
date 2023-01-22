import Box from '@mui/material/Box';
import Logo from './armlogo.png';

function ArmLogo() {
   

    return (
        <Box sx={{ pl: 2, pr: 0, my: 2 }}>
            <a href="https://www.armageddon.org" target='_blank'>
                <img src={Logo} alt="Armageddon MUD Logo" style={{ height: 120 }} />
            </a>
        </Box>
    );
}

export default ArmLogo;