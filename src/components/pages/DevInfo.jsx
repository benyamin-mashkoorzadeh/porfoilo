import {KeyboardArrowLeftRounded} from "@mui/icons-material";
import {Box, Typography} from "@mui/material";

const Info = ({children}) => {
    return (
        <Typography variant="body1" color="black" textAlign="left" sx={{mt: 2}}>
            {children}
            <KeyboardArrowLeftRounded sx={{verticalAlign: 'bottom', color: 'primary.main'}}/>
        </Typography>
    )
}

const DevInfo = () => {
    return (
        <>
            <Box component="div">
                <Info>
                    نام و نام خانوادگی : بنیامین مشکورزاده
                </Info>
                <Info>
                    سن : ۳۲
                </Info>
                <Info>
                    شهر : برلین
                </Info>
                <Info>
                    benyamin.mashkoorzadeh@gmail.com : ایمیل
                </Info>
                <Info>
                    شماره موبایل : 17681400234 (49+)
                </Info>
            </Box>
        </>
    )
}

export default DevInfo;
