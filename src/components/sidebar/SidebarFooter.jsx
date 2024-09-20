import {Box, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteRounded} from "@mui/icons-material";

const SidebarFooter = () => {
    return (
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                alignItems: 'center',
                height: 100
            }}>
                <Typography variant="subtitle2" color="text.primary">
                    طراحی شده با{' '}
                    <FavoriteRounded sx={{verticalAlign: 'middle', color: 'tomato', height: 20}}/>
                </Typography>

                <Typography variant="subtitle2" color="text.primary" sx={{mb: 2}}>
                    کپی رایت ۱۴۰۳{' '}
                    <CopyrightRounded sx={{verticalAlign: 'middle', height: 16}}/>
                </Typography>
            </Box>
    )
}

export default SidebarFooter;
