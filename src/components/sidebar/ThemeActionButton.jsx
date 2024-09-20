import MainContext from '../../context';
import {Box, Fab, useTheme} from "@mui/material";
import {useContext} from "react";
import {NightlightOutlined, WbSunnyOutlined} from "@mui/icons-material";

const ThemeActionButton = () => {
    const theme = useTheme()
    const {handleThemeChange} = useContext(MainContext)

    return (
        <Box sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block', position: 'absolute'}}}>
            <Fab aria-label="ThemeChanger" variant="extended" size="small" color="secondary"
                 onClick={handleThemeChange} sx={{ml: 2, color: 'whitesmoke'}}>
                {theme.palette.mode === 'dark' ? <WbSunnyOutlined sx={{mr:1}} /> : <NightlightOutlined sx={{mr:1}} />}
                {theme.palette.mode === 'dark' ? 'تم روز' : 'تم شب'}
            </Fab>
        </Box>
    )
}

export default ThemeActionButton;
