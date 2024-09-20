import {Card, CardContent} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import avatar from '../assets/picture.jpg';

import {DevInfo, Skills, DevWorkCount} from "../components/pages";
import {CustomAvatar, CustomDivider} from "../components/common";
import {Helmet} from "react-helmet-async";

const About = ({helmetTitle}) => {

    return (
        <Card sx={{height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll'}}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{mx: 3}}>

                    <Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}>
                        <CustomDivider bColor="primary.main" cColor="primary" icon={<CodeRounded/>} align="right"
                                       text="توسعه دهنده فول استک"/>

                        <Grid container>

                            <Grid size={{xs: 0, sm: 4, md: 3, lg: 3, xl: 3}}
                                  sx={{display: {xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block'},
                                      mt: 3}}>

                                {/* DevWorkCount Section */}
                                <DevWorkCount />

                            </Grid>

                            <Grid size={{xs: 12, sm: 8, md: 9, lg: 9, xl: 9}} sx={{mr: 34}}>
                                {/*  DevInfo Section */}
                                <DevInfo />

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid size={{xs: 0, sm: 0, md: 4, lg: 4, xl: 4}}>

                        <CustomAvatar avatar={avatar} size={250} fallback="BM"/>

                    </Grid>

                </Grid>

                <Grid container>
                    <Grid sx={{width: 1, mt: 1}}>
                        <CustomDivider bColor="secondary.main" cColor="secondary" icon={<SelfImprovementRounded/>} align="center"
                                       text="مهارت های من"/>

                        {/*  Skills  */}
                        <Skills />

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About
